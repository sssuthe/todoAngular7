export class TodoItemModel
{
	guid: string;

  userName: String;
  todo: String;
  isDone: Boolean;
  hasAttachment: Boolean

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}
