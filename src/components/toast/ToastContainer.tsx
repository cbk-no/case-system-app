import Toast from "./Toast";
import "./Toast.css";

export default function ToastContainer({ toasts }: { toasts: string[] }) {
  return (
    <div className="toast-container">
      {toasts.map((msg, i) => (
        <Toast key={i} message={msg} />
      ))}
    </div>
  );
}
