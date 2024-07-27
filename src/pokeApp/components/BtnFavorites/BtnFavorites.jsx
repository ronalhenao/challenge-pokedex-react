import { Bookmark } from 'lucide-react';
import './BtnFavorites.css';

export default function BtnFavorites({onAdd}) {
  return (
    <button
        type='button'
        onClick={ onAdd }
        className='btn-favorites'>
          <Bookmark size={16}/>
          <span className=''>Añadir a favoritos</span>
      </button>
  )
}
