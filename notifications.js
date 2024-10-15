angular.module('notificationsApp', [])
.controller('NotificationsController', function() {
    this.newNotification = {};
    this.notificationList = [];
    this.searchQuery = '';

    this.addNotification = () => {
        if (this.newNotification.title && this.newNotification.message) {
            this.notificationList.push({
                title: this.newNotification.title,
                message: this.newNotification.message,
                date: new Date()
            });
            // Clear form fields
            this.newNotification.title = '';
            this.newNotification.message = '';
        } else {
            alert('Please fill out all fields.');
        }
    };

    this.deleteNotification = (index) => {
        this.notificationList.splice(index, 1);
    };
});
angular.module('notificationsApp', [])
.controller('NotificationsController', function() {
    this.newNotification = {};
    this.notificationList = [];
    this.searchQuery = '';

    this.addNotification = () => {
        if (this.newNotification.title && this.newNotification.message) {
            this.notificationList.push({
                title: this.newNotification.title,
                message: this.newNotification.message,
                date: new Date()
            });
            // Clear form fields
            this.newNotification.title = '';
            this.newNotification.message = '';
        } else {
            alert('Please fill out all fields.');
        }
    };

    this.deleteNotification = (index) => {
        this.notificationList.splice(index, 1);
    };
});
