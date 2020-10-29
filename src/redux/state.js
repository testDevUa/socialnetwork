import Render from "../render";

let state = {
    profilePage: {
        posts: [
            {
                text: 'Hey, why nobody loves me'
            },
            {
                text: 'Just text'
            },
            {
                text: 'Third post'
            },
            {
                text: 'Second post'
            },
            {
                text: 'First post'
            }
          ],
    },
    dialogsPage: {
        dialogs: [
            {
                name: 'Dmytro',
                id: 1
            },
            {
                name: 'Sasha',
                id: 2
            },
            {
                name: 'Vova',
                id: 3
            },
            {
                name: 'Nastya',
                id: 4
            }
          ]
    }
};

export let addPost = (props) => {
    state.profilePage.posts.push(
        {
            text: props
        }
    )
    Render(state);
}

export default state;