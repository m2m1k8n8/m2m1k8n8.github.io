$(document).ready(function() {
    $('#save-task').on('click', function() {
        const taskName = $('#task-name').val().trim();
        if (taskName === '') {
            alert('Please enter a task name.');
            return;
        }

        const existingTask = $('#task-list').find('.task-item').filter(function(){
            return $(this).find('span').text() === taskName;
        });

        if (existingTask.length > 0) {
            alert('Task already exists!');
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
