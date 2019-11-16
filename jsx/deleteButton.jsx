class DeleteButton extends React.Component{
    onSubmit (){
        this.props.onDelete(this.props.content);
    }

    render(){
        //console.log(this.props)
        return(
            <div className="right floated content middle aligned content">
                <button 
                   type="button"
                    onClick={this.onSubmit.bind(this)}>
                    
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        );
    }
};
export default DeleteButton;