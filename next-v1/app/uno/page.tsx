import Props from './props';
import { useAppContext } from '../context/AppContext';

export default function Uno() {
    const { nombre } = useAppContext();

  return (
    <div>
      uno

      <Props nombre="este es un props" />
      {nombre}
    </div>
  );
}