type TodoInputProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
};

function TodoInput({ value, onChange, onAdd }: TodoInputProps) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={onAdd}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
