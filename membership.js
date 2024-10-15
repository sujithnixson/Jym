// Define the AngularJS module with dependency injection for ngAnimate
angular.module('membershipApp', ['ngAnimate'])

.service('MembershipService', function() {
    var memberships = [];

    this.addMembership = function(membership) {
        memberships.push(membership);
    };

    this.getMemberships = function() {
        return memberships;
    };
})

.controller('MembershipController', function(MembershipService) {
    this.newMembership = {};
    this.memberships = MembershipService.getMemberships();
    this.searchQuery = '';

    this.saveMembership = () => {
        if (this.newMembership.plan && this.newMembership.startDate && this.newMembership.endDate) {
            MembershipService.addMembership({
                plan: this.newMembership.plan,
                startDate: this.newMembership.startDate,
                endDate: this.newMembership.endDate
            });
            this.newMembership.plan = '';
            this.newMembership.startDate = '';
            this.newMembership.endDate = '';
        } else {
            alert('Please fill out all fields.');
        }
    };

    this.deleteMembership = (index) => {
        this.memberships.splice(index, 1);
    };
});
