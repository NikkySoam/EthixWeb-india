import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { api, ApiError } from '../lib/api';

type LeadStatus = 'new' | 'contacted' | 'qualified' | 'closed';

interface Lead {
  _id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  status: LeadStatus;
  createdAt: string; // ISO string
  updatedAt: string;
}

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(''); // placeholder – leads have no status yet

  // Verify session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get('/admin/me', { credentials: 'include' });
        await loadLeads();
      } catch (err) {
        if (err instanceof ApiError && err.status === 401) {
          navigate('/admin/login', { replace: true });
          return;
        }
        console.error(err);
        setError(err instanceof Error ? err.message : 'Failed to verify session');
        setLoading(false);
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<Lead[]>('/admin/leads', { credentials: 'include' });
      setLeads(data);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        navigate('/admin/login', { replace: true });
        return;
      }
      setError(err instanceof Error ? err.message : 'Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      await api.del(`/admin/leads/${id}`, { credentials: 'include' });
      // Refresh list after deletion
      await loadLeads();
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : 'Delete failed'}`);
    }
  };

  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    const previousLead = leads.find((lead) => lead._id === id);
    if (!previousLead || previousLead.status === newStatus) return;

    setLeads((currentLeads) =>
      currentLeads.map((lead) => lead._id === id ? { ...lead, status: newStatus } : lead),
    );

    try {
      await api.patch(`/admin/leads/${id}`, { status: newStatus }, { credentials: 'include' });
    } catch (err) {
      setLeads((currentLeads) =>
        currentLeads.map((lead) => lead._id === id ? previousLead : lead),
      );
      alert(`Error: ${err instanceof Error ? err.message : 'Update failed'}`);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/admin/logout', {}, { credentials: 'include' });
    } finally {
      navigate('/admin/login', { replace: true });
    }
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const term = search.toLowerCase();
      const matchesSearch =
        lead.name.toLowerCase().includes(term) ||
        lead.email.toLowerCase().includes(term) ||
        (lead.company?.toLowerCase().includes(term) ?? false);
      const matchesStatus = statusFilter ? lead.status === statusFilter : true;
      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  const summaryCards = [
    {
      label: 'Total leads',
      value: String(leads.length),
      accent: 'bg-brand/10 text-brand',
    },
    {
      label: 'New today',
      value: String(leads.filter((lead) => new Date(lead.createdAt).toDateString() === new Date().toDateString()).length),
      accent: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'Qualified',
      value: String(leads.filter((lead) => lead.status === 'qualified').length),
      accent: 'bg-sky-50 text-sky-700',
    },
    {
      label: 'Follow-ups',
      value: String(leads.filter((lead) => lead.status === 'contacted').length),
      accent: 'bg-amber-50 text-amber-700',
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8f8f7] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-neutral-200 bg-white p-5 shadow-[0_20px_60px_rgba(17,17,17,0.04)] sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Dashboard</p>
            <h1 className="mt-2 font-heading text-4xl text-neutral-900">EthixWeb leads</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-600">
              {new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <Button variant="outline" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>

        {loading && (
          <div className="rounded-[28px] border border-neutral-200 bg-white p-8 text-center text-neutral-600 shadow-sm" role="status">
            Loading leads…
          </div>
        )}

        {error && (
          <div className="rounded-[28px] border border-red-200 bg-red-50 p-4 text-center text-red-700" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {summaryCards.map((card) => (
                <div key={card.label} className="rounded-[24px] border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${card.accent}`}>
                    {card.label}
                  </div>
                  <div className="mt-4 text-3xl font-bold text-neutral-900">{card.value}</div>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-white p-4 shadow-[0_20px_60px_rgba(17,17,17,0.03)] sm:p-6">
              <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search by name, email or company"
                    className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2.5 pr-10 text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <select
                  className="rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2.5 text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              {filteredLeads.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-neutral-500">
                  No leads found.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm text-neutral-700">
                    <thead>
                      <tr className="border-b border-neutral-200 text-neutral-500">
                        <th className="px-3 py-3 font-medium">Name</th>
                        <th className="px-3 py-3 font-medium">Email</th>
                        <th className="px-3 py-3 font-medium">Company</th>
                        <th className="px-3 py-3 font-medium">Service</th>
                        <th className="px-3 py-3 font-medium">Submitted</th>
                        <th className="px-3 py-3 font-medium">Status</th>
                        <th className="px-3 py-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead) => (
                        <tr key={lead._id} className="border-b border-neutral-200 last:border-b-0 hover:bg-neutral-50">
                          <td className="px-3 py-4 font-medium text-neutral-900">{lead.name}</td>
                          <td className="px-3 py-4">
                            <a href={`mailto:${lead.email}`} className="text-brand underline-offset-4 hover:underline">
                              {lead.email}
                            </a>
                          </td>
                          <td className="px-3 py-4">{lead.company ?? '-'}</td>
                          <td className="px-3 py-4">
                            <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                              {lead.service}
                            </span>
                          </td>
                          <td className="px-3 py-4">{new Date(lead.createdAt).toLocaleDateString()}</td>
                          <td className="px-3 py-4">
                            <select
                              aria-label={`Status for ${lead.name}`}
                              className="rounded-lg border border-neutral-300 bg-white px-2 py-1.5 text-sm text-neutral-700 outline-none focus:border-brand"
                              value={lead.status ?? 'new'}
                              onChange={(e) => handleStatusChange(lead._id, e.target.value as LeadStatus)}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="qualified">Qualified</option>
                              <option value="closed">Closed</option>
                            </select>
                          </td>
                          <td className="px-3 py-4">
                            <button
                              className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 transition hover:bg-red-100"
                              onClick={() => handleDelete(lead._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
