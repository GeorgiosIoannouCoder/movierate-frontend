import React, { useState } from "react";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { deleteMovie } from "../api/movie";
import { useNotification } from "../hooks";
import { getPoster } from "../utils/helper";
import ConfirmModal from "./modals/ConfirmModal";
import UpdateMovie from "./modals/UpdateMovie";

const MovieListItem = ({ movie, afterDelete, afterUpdate }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [busy, setBusy] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { updateNotification } = useNotification();

  const handleOnDeleteConfirm = async () => {
    setBusy(true);
    const { error, message } = await deleteMovie(movie.id);
    setBusy(false);

    if (error) {
      return updateNotification("error", error);
    }

    hideConfirmModal();
    updateNotification("success", message);
    afterDelete(movie);
  };

  const handleOnEditClick = () => {
    setShowUpdateModal(true);
    setSelectedMovieId(movie.id);
  };

  const handleOnUpdate = (movie) => {
    afterUpdate(movie);
    setShowUpdateModal(false);
    setSelectedMovieId(null);
  };

  const displayConfirmModal = () => setShowConfirmModal(true);
  const hideConfirmModal = () => setShowConfirmModal(false);

  return (
    <>
      <MovieCard
        movie={movie}
        onDeleteClick={displayConfirmModal}
        onEditClick={handleOnEditClick}
      />
      <div className="p-0">
        <ConfirmModal
          visible={showConfirmModal}
          onConfirm={handleOnDeleteConfirm}
          onCancel={hideConfirmModal}
          title="Are you sure?"
          subtitle="This action will remove this movie permanently!"
          busy={busy}
        />
        <UpdateMovie
          movieId={selectedMovieId}
          visible={showUpdateModal}
          onSuccess={handleOnUpdate}
        />
      </div>
    </>
  );
};

const MovieCard = ({ movie, onDeleteClick, onEditClick }) => {
  const { poster, title, responsivePosters, genres = [], status } = movie;
  return (
    <div className="w-full border-b p-3 flex flex-col sm:flex-row sm:space-x-5">
      <div className="w-full sm:w-1/4 mb-5 sm:mb-0">
        <img
          className="w-40 aspect-video sm:h-20 md:h-30 lg:h-55 object-cover"
          src={getPoster(responsivePosters) || poster}
          alt={title}
        />
      </div>

      <div className="w-full sm:w-3/4 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-semibold text-primary dark:text-custom-gray sm:text-xl md:text-2xl lg:text-3xl mb-3">
            {title}
          </h1>
          <div className="space-x-1 mb-3">
            {genres.map((g, index) => {
              return (
                <span
                  key={g + index}
                  className="text-primary dark:text-custom-gray text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  {g}
                </span>
              );
            })}
          </div>
          <p className="text-primary dark:text-custom-gray sm:text-sm md:text-base lg:text-lg mb-3">
            {status}
          </p>
        </div>

        <div className="flex items-center space-x-3 text-primary dark:text-custom-gray text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <button onClick={onDeleteClick} type="button">
            <BsTrash />
          </button>
          <button onClick={onEditClick} type="button">
            <BsPencilSquare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
