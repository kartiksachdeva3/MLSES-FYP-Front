import { useEffect } from "react";
import FieldsCardlay from "../ContentContainer/Fields";
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index';
import Spinner from '../assets/Spinner/Spinner';

const mapStateToProps = state => {
    return {
      fieldsdata: state.fil.field,
      loading: state.fil.loading,
      token: state.auth.idToken
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onFetchfield: (token) =>
        dispatch(actions.field(token))
    };
  };

const FieldsData = props => {
    useEffect(() => {
    props.onFetchfield(props.token)
        
    }, []);

    let FieldsData = <Spinner/>;
    if(!props.loading){
        FieldsData = props.fieldsdata.map(fields => (
          <Grid container spacing={3}>
             <FieldsCardlay data={fields}/>
          </Grid>
           
        ));
    }

    return <div>{FieldsData}</div>

};
export default connect(mapStateToProps,mapDispatchToProps)(FieldsData)

