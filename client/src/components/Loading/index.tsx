import './Loading.css';

const Loading = () => {
  return (
    <div className="center">
      <div
        className="spinner-border"
        style={{ width: '6rem', height: '6rem' }}
        role="status"
      />
    </div>
  );
};

export default Loading;
