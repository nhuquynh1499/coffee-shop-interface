import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CategoryPage from "../pages/CategoryPage";
import { getList } from "../actions";
import { ObjectUtils } from "../../../../utils/object.utils";

const mapStateToProps = ({ listReducer }) => ({
  list: ObjectUtils.get(listReducer, 'listCategory', []),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getList
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
