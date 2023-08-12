import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { CommentContext } from "@/contexts/CommentContext";

const CommentForm = () => {
  const { formInputs, setFormInputs } = useContext(CommentContext);
  const [newInputs, setNewInputs] = useState(formInputs);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormInputs(newInputs);
  };

  return (
    <form className="flex basis-[30%] flex-col gap-2 rounded-lg p-4 ">
      <Label htmlFor="username">Username: </Label>
      <Input
        className="bg-card accent-card  hover:bg-white/10"
        name="username"
        type="text"
        value={newInputs.username}
        onChange={(e) =>
          setNewInputs({ ...newInputs, username: e.target.value })
        }
        placeholder="Masukkan Username"
      />
      <Label htmlFor="comment">Comment: </Label>
      <Textarea
        className="bg-card hover:bg-white/10"
        name="comment"
        value={newInputs.comment}
        onChange={(e) =>
          setNewInputs({ ...newInputs, comment: e.target.value })
        }
        placeholder="Masukkan Comment"
      />
      <Button onClick={(e) => handleSubmit(e)} type="submit" className="my-2">
        Submit
      </Button>
    </form>
  );
};

export default CommentForm;
