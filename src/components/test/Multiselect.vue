<template>
    <div>
        <div class="row align-items-center justify-content-center">
            <div class="col-xs-3 alert alert-warning" v-if="showalert" style="margin: 10px;" role="alert">
                Please select at lease one option
            </div>
        </div>
        <div class="row">
            <div class="col-xs-5">
                <select class="form-control" id="leftOptions" v-model="leftSelected" multiple="multiple" style="min-height: 150px;background:#f8f8f8; color: #0d47a1">
                    <option v-for="optionLeft in leftOptions" v-bind:value="optionLeft">{{ optionLeft.countryName }}</option>
                </select>
            </div>
            <div class="col-xs-2">
                <button type="button" id="multiselect_rightAll" class="btn btn-block" v-on:click="multiselect_rightAll()"><i class="glyphicon glyphicon-forward"></i></button>
                <button type="button" id="multiselect_rightSelected" class="btn btn-block"  v-on:click="multiselect_rightSelected()"><i class="glyphicon glyphicon-chevron-right"></i></button>
                <button type="button" id="multiselect_leftSelected" class="btn btn-block" v-on:click="multiselect_leftSelected()"><i class="glyphicon glyphicon-chevron-left"></i></button>
                <button type="button" id="multiselect_leftAll" class="btn btn-block"  v-on:click="multiselect_leftAll()"><i class="glyphicon glyphicon-backward"></i></button>
            </div>
            <div class="col-xs-5">
                <select class="form-control" id="dataset_id" v-model="rightSelected"  multiple="multiple" style="min-height: 150px;background:#f8f8f8; color: #ef6c00">
                    <option v-for="optionRight in rightOptions" v-bind:value="optionRight">{{ optionRight.countryName }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'multiselect',
      data () {
        return {
          leftOptions: [
                    {countryCode: 'AU', countryName: 'Australia'},
                    {countryCode: 'CA', countryName: 'Canada'},
                    {countryCode: 'CN', countryName: 'China'},
                    {countryCode: 'DE', countryName: 'Germany'},
                    {countryCode: 'JP', countryName: 'Japan'},
                    {countryCode: 'MX', countryName: 'Mexico'},
                    {countryCode: 'CH', countryName: 'Switzerland'},
                    {countryCode: 'US', countryName: 'United States'}
          ],
          rightOptions: [],
          leftSelected: [],
          rightSelected: [],
          showalert: false
        }
      },
      methods: {
        multiselect_rightAll: function () {
          this.leftOptions.forEach(x => {
              // checking if option already exists
            const rightIndex = this.rightOptions.findIndex(z => z === x)
              //  if option already exists it does not push
            if (!(rightIndex > -1)) {
              this.rightOptions.push(x)
            }
          })
          this.leftOptions = []
          this.showalert = false
        },
        multiselect_leftAll: function () {
          this.rightOptions.forEach(x => {
            const rightIndex = this.leftOptions.findIndex(z => z === x)
            if (!(rightIndex > -1)) {
              this.leftOptions.push(x)
            }
          })
          this.rightOptions = []
          this.showalert = false
        },
        multiselect_rightSelected: function () {
          this.showalert = this.leftSelected.length === 0
          this.leftSelected.forEach(x => {
            const leftIndex = this.leftOptions.findIndex(y => y === x)
            this.leftOptions.splice(leftIndex, 1)
            const rightIndex = this.rightOptions.findIndex(z => z === x)
            if (!(rightIndex > -1)) {
              this.rightOptions.push(x)
            }
          })
        },
        multiselect_leftSelected: function () {
          this.showalert = this.rightSelected.length === 0
          this.rightSelected.forEach(x => {
            const rightIndex = this.rightOptions.findIndex(y => y === x)
            this.rightOptions.splice(rightIndex, 1)
            const leftIndex = this.leftOptions.findIndex(z => z === x)
            if (!(leftIndex > -1)) {
              this.leftOptions.push(x)
            }
          })
        }

      }
    }
</script>