import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { fetchDataWithParams, putData, removeData } from '../../helper/axios';

const EditCourse = () => {
  const headerProps = {
    title: 'Alterar Curso',
  };

  const [code, setCode] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await fetchDataWithParams('http://localhost:3004/curso', id);

      setCode(courseData?.idcurso);
      setTitle(courseData?.ds_titulo);
      setDescription(courseData?.ds_descricao);
    };

    fetchData();
  }, []);

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
    await putData('http://localhost:3004/curso', id, {
      idcurso: parseInt(code, 10),
      ds_titulo: title,
      ds_descricao: description,
    });

    navigate('/');
  };

  const [toggleModal, setToggleModal] = React.useState('hidden');

  const removeSubmit = async () => {
    await removeData('http://localhost:3004/curso', id);

    navigate('/');
  };

  return (
    <div data-testid="edit-course-component">
      <div>
        <Header props={headerProps} />
        <button
          type="button"
          className="mx-3 bg-green-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          disabled={disableBtn}
          onClick={handleSubmit}
        >
          Salvar
        </button>
        <button
          type="button"
          className="mx-3 bg-red-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => setToggleModal('visible')}
        >
          Excluir
        </button>
        <div
          className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        />
        <div
          id="modal-box"
          className={`${toggleModal} fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black/50`}
        >
          <div
            id="modal-box-content"
            className="mt-72 mx-auto max-w-md p-5 rounded-lg shadow-lg bg-white"
          >
            <h1>Confirma a exclusão?</h1>
            <p>
              Deseja remover o registro
              {' '}
              {title}
              ?
            </p>
            <button
              type="button"
              className="mx-3 bg-blue-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setToggleModal('hidden')}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="mx-3 bg-red-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              onClick={removeSubmit}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
      <form>
        <div className="form-group flex">
          <label htmlFor="id">
            Código
            <input
              id="id"
              type="number"
              placeholder="Código"
              data-testid="id-input"
              onChange={({ target }) => setCode(target.value)}
              value={code}
            />
          </label>
          <label htmlFor="title">
            Título
            <input
              id="title"
              type="text"
              placeholder="Título"
              data-testid="title-input"
              onChange={({ target }) => setTitle(target.value)}
              value={title}
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              id="description"
              rows="3"
              placeholder="Descrição"
              data-testid="description-input"
              onChange={({ target }) => setDescription(target.value)}
              value={description}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
