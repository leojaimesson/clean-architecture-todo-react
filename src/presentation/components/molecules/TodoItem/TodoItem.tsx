import { Todo } from "../../../../domain/models/Todo";
import { Button } from "../../atoms/Button/Button";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import {
  ButtonActionsContainer,
  CheckboxContainer,
  ItemContainer,
} from "./TodoItemStyles";

import DeleteIcon from "../../../assets/svg/delete.svg";
import EditIcon from "../../../assets/svg/edit.svg";
import SaveIcon from "../../../assets/svg/save.svg";

import { FormEvent, useRef, useState } from "react";

type Props = {
  todo: Todo;
  onChangeCheckbox: (todo: Todo) => {};
  onClickDeleteButton: (todo: Todo) => {};
  onClickSaveButton: (todo: Todo) => {};
};

const LINE_HEIGHT = 30;

export const TodoItem: React.FC<Props> = ({
  todo,
  onChangeCheckbox,
  onClickDeleteButton,
  onClickSaveButton,
}: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(todo.description);

  const [textAreaHeight, setTextAreaHeight] = useState<number>(LINE_HEIGHT);

  const textareaRef = useRef(null);

  const handleClickEdit = () => {
    setEditMode(!editMode);
  };

  const handleChangeDescription = (event: FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    setDescription(target.value);

    if (textareaRef.current) {
      const current = textareaRef.current as HTMLTextAreaElement;
      if (textAreaHeight < current.scrollHeight - LINE_HEIGHT / 2) {
        setTextAreaHeight(textAreaHeight + LINE_HEIGHT);
      }
    }
  };

  const handleClickSave = () => {
    todo.description = description;
    onClickSaveButton(todo);
    setEditMode(false);
  };

  return (
    <ItemContainer key={todo.key}>
      <CheckboxContainer checked={todo.done} editMode={editMode}>
        <Checkbox checked={todo.done} onChange={() => onChangeCheckbox(todo)} />
        {!editMode && <span>{description}</span>}
        {editMode && (
          <textarea
            ref={textareaRef}
            value={description}
            onChange={handleChangeDescription}
            style={{ height: textAreaHeight > 0 ? textAreaHeight : "" }}
          />
        )}
      </CheckboxContainer>
      <ButtonActionsContainer>
        {editMode && (
          <Button onClick={handleClickSave}>
            <img src={SaveIcon} alt="save icon" />
          </Button>
        )}
        {!editMode && (
          <Button onClick={handleClickEdit}>
            <img src={EditIcon} alt="edit icon" />
          </Button>
        )}
        <Button onClick={() => onClickDeleteButton(todo)}>
          <img src={DeleteIcon} alt="delete icon" />
        </Button>
      </ButtonActionsContainer>
    </ItemContainer>
  );
};
