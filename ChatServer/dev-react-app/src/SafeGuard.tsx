import React from "react";
import { addAlert } from "./actions/add-alert.action";
import { AlertType } from "./interfaces/IAlert";
import AlertContainer from "./containers/AlertContainer/AlertContainer";
import { Dispatch } from "redux";

class SafeGuard extends React.Component<{dispatch: Dispatch<any>},{hasError: boolean}>{
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
      }
    componentDidCatch(error: any, errorInfo: any){
        this.props.dispatch(addAlert({type: AlertType.error, text: 'Возникла непредвиденная ошибка. Пожалуйста, перезагрузите страницу.'}, this.props.dispatch));
    }
    static getDerivedStateFromError(error: any){
        return { hasError: true };
    }
    render()
    {
        if (this.state.hasError) {
            return <AlertContainer/>;
        }
        return <>{this.props.children}<AlertContainer/></>;
    }
}

export default SafeGuard;