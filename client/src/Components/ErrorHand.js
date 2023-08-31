import { useSelector } from "react-redux"
import { Alert } from "react-bootstrap"
const ErrorHand=()=>{

    const errrors = useSelector(state=> state.ErrorReducer)
    return(
        <div>
            {
                errrors.map(el=>      <Alert  variant='danger'>
                    {el.msg}
                  </Alert>)
            }
        </div>
    )
}

export default ErrorHand