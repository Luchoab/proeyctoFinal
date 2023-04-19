import '../../styles/Register.css';
import { GridRegister } from '../../components/GridRegister/GridRegister';
import { useAuth } from '../../components/context/AuthContext';

export const Registrarse = () => {
  const auth = useAuth();
  return (
    <>
      {auth.user ? <p className='text-center'>Ya estas registrado pillin</p> : <GridRegister></GridRegister>}
    </>
  );
}


