const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      //Ȯ�� ��ư Ŭ����
      onConfirm();
    } else {
      try {
        onCancel();
      } catch (error) {
        return;
      }
    }
  };
  return confirmAction;
};

function App() {
  const deleteWorld = () => {
    console.log("Deleting the world...");
  };
  const abort = () => {
    console.log("Aborted");
  };
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default App;
