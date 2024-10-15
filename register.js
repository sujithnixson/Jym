angular.module('registerApp', [])
.controller('RegisterController', function($http) {
    var vm = this;

    // Initialize user data
    vm.user = {
        username: '',
        email: '',
        password: ''
    };

    // Function to handle registration
    vm.register = function() {
        if (!vm.user.username || !vm.user.email || !vm.user.password) {
            alert('Please fill out all fields');
            return;
        }

        $http.post('/api/register', vm.user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            if (response.data.success) {
                alert('Registration successful');
                // Optionally redirect to another page or clear the form
                vm.user = {
                    username: '',
                    email: '',
                    password: ''
                };
            } else {
                alert('Registration failed');
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    };
});
