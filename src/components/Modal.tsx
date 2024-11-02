interface ModalProps {
  videoUrl: string;
  onClose: () => void;
}

const Modal = ({ videoUrl, onClose }: ModalProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg p-4 max-w-4xl w-full">
      <video controls className="w-full">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <button 
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Close
      </button>
    </div>
  </div>
);

export default Modal;
