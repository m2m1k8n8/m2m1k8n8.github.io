$(document).ready(function() {
    $('#save-task').on('click', function() {
        const taskName = $('#task-name').val().trim();
        if (taskName === '') {
            alert('Please enter a task name.');
            return;
        }

        const taskItem = $('<div class="col-md-6 task-item"></div>').append(
            $('<span></span>').text(taskName),
            $('<button>Delete</button>').on('click', function() {
                $(this).parent().remove();
            })
        );

        $('#task-list').append(taskItem);
        $('#task-name').val('');
        $('#taskModal').modal('hide');
    });
});