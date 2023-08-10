import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const CommentForm = () => {
  return (
    <form className="flex flex-col gap-2 rounded-lg p-4 outline outline-1">
      <Label htmlFor="username">Username: </Label>
      <Input name="username" type="text" placeholder="Masukkan Username" />
      <Label htmlFor="comment">Comment: </Label>
      <Textarea name="comment" placeholder="Masukkan Comment" />
      <Button className="my-2">Submit</Button>
    </form>
  );
};

export default CommentForm;
