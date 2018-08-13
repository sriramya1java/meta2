<template>
<div class="hero is-fullheight is-info is-bold">
    <div class="hero-body">
        <div class="container">
            <h1 class="title has-text-centered">Vue.js Form Processing</h1>
            <div class="box">

                <!-- our signup form ===================== -->
                <form id="signup-form" @submit.prevent="processForm">
                    <!-- name -->
                    <div class="field">
                        <label class="label">Name</label>
                        <input
                                type="text"
                                class="input"
                                name="name"
                                v-model="name">
                    </div>

                    <!-- email -->
                    <div class="field">
                        <label class="label">Email</label>
                        <input
                                type="email"
                                class="input"
                                name="email"
                                v-model="email"
                                @blur="validateEmail">

                        <p class="help is-danger" v-if="errors.email">
                            Please enter a valid email.
                        </p>
                    </div>

                    <!-- submit button -->
                    <div class="field has-text-right">
                        <button type="submit" class="button is-danger">
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
</template>
<!-- our javascript -->
<script>
    import Test from './TestForm'

    export default {
      components: {
        Test
      },
      name: 'test',
      el: '#signup-form',
      data: {
        name: '',
        email: '',
        errors: {
          name: false,
          email: false
        }
      },
      methods: {
        processForm: function () {
          console.log({ name: this.name, email: this.email })
          alert('Processing')
        },
        validateEmail: function () {
          const isValid = isValidEmail(this.email)
          this.errors.email = !isValid
        }
      }
    }

// helpers ===============================================
/**
 * Validate emails
 * Not 100% reliable. Just a quick and dirty check.
 */
function isValidEmail (email) {
      let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
      return re.test(email)
}
</script>