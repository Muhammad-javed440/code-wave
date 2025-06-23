'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import VantaBackground from '@/components/VantaBackground';
import AnimatedGradientText from '@/components/AnimatedGradientText';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'react-hot-toast';
export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!name || !email || !password) {
      setError('All fields are necessary.');
      setIsLoading(false);
      return;
    }

    try {
      const success = await signup(name, email, password);
      
      if (success) {
        const form = e.target as HTMLFormElement;
        form.reset();
        // Show success message
         
        router.push('/signin');
        toast.success('Signup  successfully!');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      
      toast.error('An error occurred during signup.');

      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      <VantaBackground>
        <></>
      </VantaBackground>
      <div className="relative z-10 w-full max-w-md p-8 space-y-8 bg-slate-900/80 rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-center tracking-wider">
          <AnimatedGradientText>Create an Account</AnimatedGradientText>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900 disabled:opacity-50 transition-all duration-300"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
          {error && (
            <div className="p-3 mt-4 text-center text-red-400 bg-red-900/50 rounded-lg">
              {error}
            </div>
          )}
        </form>
        <p className="text-sm text-center text-slate-400">
          Already have an account?{' '}
          <Link href="/signin" className="font-semibold text-cyan-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
} 