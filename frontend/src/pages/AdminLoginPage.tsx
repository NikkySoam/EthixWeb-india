import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { api } from '../lib/api';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await api.post('/admin/login', { username, password }, { credentials: 'include' });
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f8f7] p-4 sm:p-6 lg:p-8">
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_24px_70px_rgba(17,17,17,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
        <Link
          to="/"
          aria-label="Back to home"
          title="Back to home"
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-800 shadow-sm transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:right-5 sm:top-5"
        >
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5m0 0 7-7m-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-neutral-900 p-7 text-white sm:p-10 lg:min-h-[680px] lg:p-14">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[36px] border-brand/80" />
          <div aria-hidden="true" className="absolute -bottom-32 -left-28 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative z-10">
            <p className="font-heading text-3xl text-white">Ethix<span className="text-brand">Web</span></p>
            <div className="mt-14 max-w-lg sm:mt-20 lg:mt-32">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">Admin workspace</p>
              <h1 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
                Every enquiry, <span className="text-red-300">in good hands.</span>
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-300">
                Your workspace for incoming leads and client conversations.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex items-center gap-3 text-xs text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span>EthixWeb India</span>
            <span className="text-neutral-600">/</span>
            <span>Lead management</span>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Secure sign in</p>
              <h2 className="mt-3 font-heading text-3xl text-neutral-900 sm:text-4xl">Welcome back</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Sign in to continue to your admin dashboard.
              </p>
            </div>

            {error && (
              <p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-neutral-700">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-neutral-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="mt-2 w-full justify-center py-3">
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </Button>
            </form>

            <div className="mt-8 border-t border-neutral-200 pt-5 text-xs text-neutral-500">
              Authorized EthixWeb administrators only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
