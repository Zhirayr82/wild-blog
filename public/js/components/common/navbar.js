import moment from 'moment'

let now = moment().format('llll');

let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', function(UsersService, $state) {
        'use strict'
        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

        })

        this.date = now;
        console.log(now)

    }]
}

export default navbar
