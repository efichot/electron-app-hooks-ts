import { ipcRenderer } from "electron";
import { toast } from "react-toastify";

ipcRenderer.on("success", (event, arg) => {
  toast.success(arg);
});

ipcRenderer.on("error", (event, arg) => {
  toast.error(arg);
});

ipcRenderer.on("warn", (event, arg) => {
  toast.warn(arg);
});

ipcRenderer.on("info", (event, arg) => {
  toast.info(arg);
});
