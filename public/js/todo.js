document.addEventListener('alpine:init', () => {
    Alpine.data('todo', () => ({
        init() { },
        toggle: false,
        todoInput: '',
        todos: todos,
        selectedTodoId: null,
        deleteTodoModal: false,
        notification: null,
        timeoutId: null,
        getTodos() {
            let self = this;

            axios.get('todos')
                .then(function (response) {
                    self.todos = response.data;
                    this.todos = response.data;
                    console.log(response.data)
                })
                .catch(function (error) { });
        },
        addTask() {
            let self = this;
            const formData = new FormData();
            if (!this.todoInput) {
                return false;
            }
            formData.append('todoInput', this.todoInput);

            this.todoInput = '';
            axios.post('todos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(function (response) {
                    console.log('test', response);
                    self.getTodos();
                    self.notificationBar('created');
                })
                .catch(function (error) {
                    if (error.hasOwnProperty('response') && error.response.hasOwnProperty(
                        'data') && error.response.data.hasOwnProperty('errors')) {
                        refThis.errors = error['response']['data']['errors'];
                    }
                });
        },
        updateTask(todoId) {
            let self = this;

            axios.put('todos/' + todoId)
                .then(function (response) {
                    self.getTodos();
                    self.notificationBar('updated');
                })
                .catch(function (error) {
                    if (error.hasOwnProperty('response') && error.response.hasOwnProperty(
                        'data') && error.response.data.hasOwnProperty('errors')) {
                        refThis.errors = error['response']['data']['errors'];
                    }
                });
        },
        deleteTodo() {
            let self = this;
            axios.delete('todos/' + this.selectedTodoId)
                .then(function (response) {
                    self.getTodos();
                    self.deleteTodoModal = false;
                    self.notificationBar('deleted');
                })
                .catch(function (error) {
                    if (error.hasOwnProperty('response') && error.response.hasOwnProperty(
                        'data') && error.response.data.hasOwnProperty('errors')) {
                        refThis.errors = error['response']['data']['errors'];
                    }
                });
        },
        notificationBar(value) {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.notification = value;
            this.timeoutId = setTimeout(() => {
                this.notification = null;
            }, 3000);
        }


    }))
})
