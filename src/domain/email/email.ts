import { eDataSource, GenericAppError, Result, UniqueEntityID, Entity } from '@softobiz-df/shared-lib'

interface EmailProps {
	name: string	
}
export class Email extends Entity<EmailProps> {
	//#region member variables
	//#endregion

	//#region constants
	//#endregion

	//#region properties
	//#endregion

	//#region private methods
	private constructor(props: EmailProps, id?: UniqueEntityID) {
		super(props, id)
	}
	//#endregion

	//#region private setters
	private setName(name: string){
		this._props.name = name
		return Result.ok(this)
	}
	
	//#endregion

	//#region public methods
	public static create(props: EmailProps, id?: UniqueEntityID, dataSource?: eDataSource) {
		if (dataSource === eDataSource.STORAGE) return Result.ok(new Email(props, id))
		const email = new Email(Object.create(null), id)
		const validationQueue = [
			email.setName(props.name)	
		]
		const combinedResult = Result.combine(validationQueue)
		if (combinedResult.isFailure) return Result.fail<Email>(new GenericAppError.DomainError(combinedResult.errorValue()))
		return Result.ok(email)
	}
	//#endregion
}

