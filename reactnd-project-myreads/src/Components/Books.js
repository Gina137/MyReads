import React,{Component} from 'react';
class Books extends Component{
    render(){
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${this.props.image})` }}></div>
                  <div className="book-shelf-changer">
                  <select  onChange={(e)=>{this.props.mychangeBook(this.props.book,e.target.value);console.log("mybook=",this.props.book,"my shelf=",e.target.value)}} value={(this.props.Shelf)?(this.props.Shelf):("none")}>
                      <option value="move"disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title text-light">{this.props.title}</div>
                <div className="book-authors text-warning">{this.props.author}</div>
              </div>
        )
    }
}
export default Books;