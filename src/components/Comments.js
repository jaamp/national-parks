import React from "react";
import firebase from "firebase";

const db = firebase.firestore();

export default class Comments extends React.Component {
    state = {
        commentEntries: [],
        entry: ""
    }

    componentDidMount() {
        this.unsubscribeComment = db
        .collection('commentEntries')
        .limit(10)
        .onSnapshot(snapshot => {
            this.setState({
                commentEntries: snapshot.docs
            });
        })
    }

    componentWillUnmount(){
        this.unsubscribeComment();
    }

    onEntryChange = (event) => {
        const entry = event.target.value;
        this.setState({entry});
}

    addCommentEntry = (event) => {
        event.preventDefault();

        db
        .collection('commentEntries')
        .add({
            entry: this.state.entry
            });

        this.setState({entry: ""});
   }

    render(){
        const commentEntries = this.state.commentEntries.map(commentEntry => 
        {return( <li key={commentEntry.id}>{commentEntry.data().entry}</li>);});


        return(
            <div>
            <h3 className="select-item-h3">Please Add Your Comments</h3>
            <p className="select-item-p">(comments limited to 100 characters)</p>
            <ul className="park-ul">
                {commentEntries}
            </ul>
            <hr/>
            <form className="comment-form" onSubmit = {this.addCommentEntry}> 
                <input onChange={this.onEntryChange} value={this.state.entry} size="100" />
                <button type="submit">Add Comment</button>
            </form>
            </div>
        )
    }
}
