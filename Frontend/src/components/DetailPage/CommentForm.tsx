import { useContext } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { CommentContext } from "@/contexts/CommentContext";

const CommentForm = () => {
  const { formInputs, setFormInputs, fetchData } = useContext(CommentContext);
  const emptyForm = {
    username: "",
    comment: "",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
    setFormInputs(emptyForm);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex basis-[30%] flex-col gap-2 rounded-lg p-4 "
    >
      <Label htmlFor="username">Username: </Label>
      <Input
        className="bg-card accent-card  hover:bg-white/10"
        name="username"
        type="text"
        value={formInputs.username}
        onChange={(e) =>
          setFormInputs({ ...formInputs, username: e.target.value })
        }
        placeholder="Masukkan Username"
      />
      <Label htmlFor="comment">Comment: </Label>
      <Textarea
        className="bg-card hover:bg-white/10"
        name="comment"
        value={formInputs.comment}
        onChange={(e) =>
          setFormInputs({ ...formInputs, comment: e.target.value })
        }
        placeholder="Masukkan Comment"
      />
      <Button type="submit" className="my-2">
        Submit
      </Button>
    </form>
  );
};

export default CommentForm;
