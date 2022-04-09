import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { postData } from '../../helper/axios';

const AddCourse = () => {
  const headerProps = {
    title: 'Adicionar Curso',
  };

  const [code, setCode] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [disableBtn, setDisableBtn] = React.useState(true);

  useEffect(() => {
    if (code && title && description) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [code, title, description]);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await postData('http://localhost:3004/curso', {
      idcurso: parseInt(code, 10),
      ds_titulo: title,
      ds_descricao: description,
    });

    navigate('/');
  };

  return (
    <div data-testid="add-course-component">
      <div className="w-full flex flex-col items-center m-auto">
        <div>
          <Header props={headerProps} />
        </div>
        <button
          type="button"
          className="mx-3 py-2 px-8 rounded-lg bg-green-500 text-neutral-100 font-extralight text-lg hover:bg-green-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disableBtn}
          onClick={handleSubmit}
        >
          Salvar
        </button>
      </div>

      <div className="mt-16">
        <form className="mb-4 md:flex md:justify-between">
          <div className="form-group flex flex-col w-[80%] lg:w-[60%] xl:w-[40%] m-auto">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="id">
              Código
              <input
                id="id"
                type="number"
                placeholder="Código"
                data-testid="id-input"
                onChange={({ target }) => setCode(target.value)}
                value={code}
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">
              Título
              <input
                id="title"
                type="text"
                placeholder="Título"
                data-testid="title-input"
                onChange={({ target }) => setTitle(target.value)}
                value={title}
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
              Descrição
              <textarea
                id="description"
                rows="3"
                placeholder="Descrição"
                data-testid="description-input"
                onChange={({ target }) => setDescription(target.value)}
                value={description}
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
