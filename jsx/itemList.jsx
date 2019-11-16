import DeleteButton from './DeleteButton.jsx';

const ItemList = (props) => {
    console.log(props.todoLists)
    const item = props.todoLists.map((term) => {
        
        return <Item 
            content={term} 
            key={props.todoLists.indexOf(term)}
            id={props.todoLists.indexOf(term)}
            onDelete={props.onDelete}
            />
        
        });
    return(
      <div className="ui relaxed divided list">{item}</div>);
 }
 const Item = (props) => {
    
  return(
      <div className="item">
          <Content content={props.content}/>
          <DeleteButton 
                content={props.content} 
                id={props.id}
                onDelete={props.onDelete}/>

      </div>
  );
};
const Content = ({ content }) => {
    
  return(
    <div className="middle aligned content">
        {content}
    </div>
);
};


export default ItemList;
