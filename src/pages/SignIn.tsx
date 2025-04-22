import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../utils/validation';
import { signIn } from '../services/auth.service';
import { useNavigate, Link } from 'react-router-dom';
import { showError } from '../utils/alert';

export default function SignIn() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await signIn(data);
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err: any) {
      console.error(err);
      showError(err.response?.data?.message || 'Signin failed');
    }
};

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 form-container">
        <h2 className="text-center mb-4">Login to Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Email" className="input" />
          <p className="text-danger">{errors.email?.message}</p>

          <input {...register("password")} placeholder="Password" type="password" className="input" />
          <p className="text-danger">{errors.password?.message}</p>

          <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        </form>

        <p className="text-center mt-4">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-primary fw-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
