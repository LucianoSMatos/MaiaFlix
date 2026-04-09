import Styles from './Form.module.css'
import { categories } from '../Category';
import { useState } from 'react';


function Form() {
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [videos, setVideos] = useState([])
    const [errors, setErrors] = useState('')

    function validateUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if (!regex.test(url) || url.length < 43) {
            setErrors('ERROR URL inválida')
            return false
        } else {
            return url.substring(32, 43)
        }


    }

    function onSave(e) {
        e.preventDefault();
        // Handle form submission logic here

         if (!category || category === '-') {
            setErrors('ERROR Selecione uma categoria')
            return
        } else {
            setErrors('')
        }
        
        const urlVideo = validateUrl(url)
        if (urlVideo && category) {

            const newVideo = { url, category };
            setVideos([...videos, newVideo]);
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));


            setUrl('');
            setCategory('');
        } else {
            setErrors('ERROR URL ou categoria inválida')

        }

       



    }


    return (
        <section className={Styles.container}>
            <h2>Cadastro de video</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do video</label>

                    <input type="text" placeholder="Digite a URL do video" required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        maxLength='43'
                        minLength='43'
                    />

                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value='-'>Selecione uma categoria</option>
                        {categories.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    )
}
export default Form