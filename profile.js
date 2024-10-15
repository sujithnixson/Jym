angular.module('profileApp', [])
.controller('ProfileController', function($http) {
    var vm = this;

    // Initialize profile data (you might want to fetch this from the server)
    vm.profile = {
        name: '',
        age: '',
        gender: '',
        phone: ''
    };

    // Function to update profile
    vm.updateProfile = function() {
        if (!vm.profile.name || !vm.profile.age || !vm.profile.gender || !vm.profile.phone) {
            alert('Please fill out all fields');
            return;
        }

        $http.put('/api/profile', vm.profile, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(function(response) {
            if (response.data.success) {
                alert('Profile updated successfully');
            } else {
                alert('Failed to update profile');
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    };
});
