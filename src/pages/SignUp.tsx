import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../utils/validation';
import { signUp } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      await signUp(data);
      navigate('/signin');
    } catch (err) {
      console.error(err);
      alert('Signup failed');
    }
  };

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 form-container">
        <h2 className="text-center mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Email" className="input" />
          <p className="text-danger">{errors.email?.message}</p>

          <input {...register("name")} placeholder="Full Name" className="input" />
          <p className="text-danger">{errors.name?.message}</p>

          <input {...register("password")} placeholder="Password" type="password" className="input" />
          <p className="text-danger">{errors.password?.message}</p>

          <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
