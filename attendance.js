angular.module('attendanceApp', [])
.controller('AttendanceController', function() {
    this.newAttendance = {};
    this.attendanceRecords = [];
    this.searchQuery = '';

    this.trackAttendance = () => {
        if (this.newAttendance.memberId) {
            this.attendanceRecords.push({
                memberId: this.newAttendance.memberId,
                date: new Date(),
                time: new Date()
            });
            // Clear form field
            this.newAttendance.memberId = '';
        } else {
            alert('Please enter a Member ID.');
        }
    };

    this.deleteAttendance = (index) => {
        this.attendanceRecords.splice(index, 1);
    };
});
