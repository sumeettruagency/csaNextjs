import nc from "next-connect";
import {getUser, createUser} from "../../../controller/userController"

const handler = nc();
handler.get(getUser);
handler.post(createUser);

export default handler;
