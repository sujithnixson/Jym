angular.module('classScheduleApp', [])
.controller('ClassScheduleController', function() {
    this.newClass = {};
    this.classes = [];
    this.searchQuery = '';

    this.addClass = () => {
        if (this.newClass.name && this.newClass.instructor && this.newClass.schedule) {
            this.classes.push({
                name: this.newClass.name,
                instructor: this.newClass.instructor,
                schedule: this.newClass.schedule,
                id: Date.now() // Unique ID for each class
            });
            // Clear form fields
            this.newClass.name = '';
            this.newClass.instructor = '';
            this.newClass.schedule = '';
        } else {
            alert('Please fill out all fields.');
        }
    };

    this.bookClass = (index) => {
        let bookedClass = this.classes[index];
        alert('You have booked: ' + bookedClass.name + ' with ' + bookedClass.instructor + ' on ' + bookedClass.schedule);
    };

    this.deleteClass = (index) => {
        this.classes.splice(index, 1);
    };
});
