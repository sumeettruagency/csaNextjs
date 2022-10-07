import nc from "next-connect";
import {getSingleUser, deleteUser} from "../../../controller/userController"

const handler = nc();
handler.get(getSingleUser);
handler.delete(deleteUser);

export default handler;