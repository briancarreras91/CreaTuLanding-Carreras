import { toast } from "react-toastify";

export const toastSuccess = (msg) => toast.success(msg, { icon: "✅" });

export const toastError = (msg) => toast.error(msg, { icon: "⛔" });

export const toastInfo = (msg) => toast.info(msg, { icon: "ℹ️" });

export const toastWarn = (msg) => toast.warn(msg, { icon: "⚠️" });

// Toast con confirmación
export const toastConfirm = ({ message, onConfirm, onCancel }) => {
  const id = toast(
    <div style={{ display: "grid", gap: "8px" }}>
      <strong>{message}</strong>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            toast.dismiss(id);
            onConfirm?.();
          }}
        >
          Sí, vaciar
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            toast.dismiss(id);
            onCancel?.();
          }}
        >
          Cancelar
        </button>
      </div>
    </div>,
    { autoClose: false }
  );

  return id;
};
