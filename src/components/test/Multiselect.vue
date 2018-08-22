<template>
  <div>
    <div class="row align-items-center justify-content-center">
      <div class="col-xs-3 alert alert-warning" v-if="showalert" style="margin: 10px;" role="alert">
        Please select at lease one option!!!
      </div>
    </div>
    <div class="row">
      <div class="col-xs-6">
        <select class="form-control" id="dimensionsList" v-model="dimensionsSelected" multiple="multiple" style="min-height: 95%;background:#ffffff; color: #0d47a1">
          <option v-for="optionLeft in dimensionsList" v-bind:value="optionLeft">{{ optionLeft.name }}</option>
        </select>
      </div>
      <div class="col-xs-6">
        <div class="row">
          <div class="col-xs-2" style="padding: 25px;">
            <button type="button" id="multiselect_rightAll" class="btn btn-block" v-on:click="multiselect_rightAll(dimensionsList, verticalDimensionsList)"><i class="glyphicon glyphicon-forward"></i></button>
            <button type="button" id="multiselect_rightSelected" class="btn btn-block"  v-on:click="multiselect_rightSelected(dimensionsSelected, dimensionsList, verticalDimensionsList)"><i class="glyphicon glyphicon-chevron-right"></i></button>
            <button type="button" id="multiselect_leftSelected" class="btn btn-block" v-on:click="multiselect_leftSelected(verticalDimensionsSelected, verticalDimensionsList, dimensionsList)"><i class="glyphicon glyphicon-chevron-left"></i></button>
            <button type="button" id="multiselect_leftAll" class="btn btn-block"  v-on:click="multiselect_leftAll(verticalDimensionsList, dimensionsList, 'vertical')"><i class="glyphicon glyphicon-backward"></i></button>
          </div>
          <div class="col-xs-8 text-left">
            <h6>vertical axis:</h6>
            <select class="form-control glyphicon" id="verticalDimensionsList" v-model="verticalDimensionsSelected"  multiple="multiple" style="min-height: 140px;background:#f8f8f8; color: #ef6c00;">
              <option v-for="optionRight in verticalDimensionsList" v-bind:value="optionRight"  v-on:click="alertLog()">{{ optionRight.name }} &#xe065;</option>
            </select>
          </div>
          <!-- <div class="col-xs-2" style="margin-top: 50px">
            <button type="button" class="btn btn-block" v-on:click="moveElementInArray(1, verticalDimensionsList, verticalDimensionsSelected)"><i class="glyphicon glyphicon-chevron-down"></i></button>
            <button type="button" class="btn btn-block" v-on:click="moveElementInArray(-1)"><i class="glyphicon glyphicon-chevron-up"></i></button>
          </div> -->
          <div class="col-xs-2" style="margin-top: 50px">
            <button type="button" class="btn btn-block" v-on:click="moveElementInArray(1)"><i class="glyphicon glyphicon-chevron-down"></i></button>
            <button type="button" class="btn btn-block" v-on:click="moveElementInArray(-1)"><i class="glyphicon glyphicon-chevron-up"></i></button>
            <v-dialog v-model="dialog" width="1000">
              <v-btn slot="activator" color="grey lighten-2" dark icon><v-icon>edit</v-icon></v-btn>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Categories</v-card-title>
                <v-card-text>drag and drop categories
                <categories></categories></v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2" style="padding: 25px;">
            <button type="button" id="multiselect_rightAll1" class="btn btn-block" v-on:click="multiselect_rightAll(dimensionsList, horizontalDimensionsList)"><i class="glyphicon glyphicon-forward"></i></button>
            <button type="button" id="multiselect_rightSelected1" class="btn btn-block"  v-on:click="multiselect_rightSelected(dimensionsSelected, dimensionsList, horizontalDimensionsList)"><i class="glyphicon glyphicon-chevron-right"></i></button>
            <button type="button" id="multiselect_leftSelected1" class="btn btn-block" v-on:click="multiselect_leftSelected(horizontalDimensionsSelected, horizontalDimensionsList, dimensionsList)"><i class="glyphicon glyphicon-chevron-left"></i></button>
            <button type="button" id="multiselect_leftAll1" class="btn btn-block"  v-on:click="multiselect_leftAll(horizontalDimensionsList, dimensionsList, 'horizontal')"><i class="glyphicon glyphicon-backward"></i></button>
          </div>
          <div class="col-xs-8 text-left">
            <h6>horizontal axis:</h6>
            <select class="form-control" id="horizontalDimensionsList" v-model="horizontalDimensionsSelected"  multiple="multiple" style="min-height: 140px;background:#f8f8f8; color: #ef6c00;">
              <option v-for="optionRight1 in horizontalDimensionsList" v-bind:value="optionRight1">{{ optionRight1.name }}</option>
            </select>
          </div>
          <div class="col-xs-2" style="margin-top: 50px">
            <button type="button" class="btn btn-block"><i class="glyphicon glyphicon-chevron-down"></i></button>
            <button type="button" class="btn btn-block"><i class="glyphicon glyphicon-chevron-up"></i></button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2" style="padding: 25px;">
            <button type="button" id="multiselect_rightAll2" class="btn btn-block" v-on:click="multiselect_rightAll(dimensionsList, outsideDimensionsList)"><i class="glyphicon glyphicon-forward"></i></button>
            <button type="button" id="multiselect_rightSelected2" class="btn btn-block"  v-on:click="multiselect_rightSelected(dimensionsSelected, dimensionsList, outsideDimensionsList)"><i class="glyphicon glyphicon-chevron-right"></i></button>
            <button type="button" id="multiselect_leftSelected2" class="btn btn-block" v-on:click="multiselect_leftSelected(outsideDimensionsSelected, outsideDimensionsList, dimensionsList)"><i class="glyphicon glyphicon-chevron-left"></i></button>
            <button type="button" id="multiselect_leftAll2" class="btn btn-block"  v-on:click="multiselect_leftAll(outsideDimensionsList, dimensionsList, 'outside')"><i class="glyphicon glyphicon-backward"></i></button>
          </div>
          <div class="col-xs-8 text-left">
            <h6>outside of table:</h6>
            <select class="form-control" id="outsideDimensionsList" v-model="outsideDimensionsSelected"  multiple="multiple" style="min-height: 140px;background:#f8f8f8; color: #ef6c00;">
              <option v-for="optionRight2 in outsideDimensionsList" v-bind:value="optionRight2">{{ optionRight2.name }}</option>
            </select>
          </div>
          <div class="col-xs-2" style="margin-top: 50px">
            <button type="button" class="btn btn-block"><i class="glyphicon glyphicon-chevron-down"></i></button>
            <button type="button" class="btn btn-block"><i class="glyphicon glyphicon-chevron-up"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Categories from '@/components/test/Categories'
  export default {
    name: 'multiselect',
    components: {
      Categories
    },
    data () {
      return {
        dimensionsList: [
          {'name': 'Afghanistan', 'countryCode': 'AF'},
          {'name': 'Aland Islands', 'countryCode': 'AX'},
          {'name': 'Albania', 'countryCode': 'AL'},
          {'name': 'Algeria', 'countryCode': 'DZ'},
          {'name': 'American Samoa', 'countryCode': 'AS'},
          {'name': 'AndorrA', 'countryCode': 'AD'},
          {'name': 'Angola', 'countryCode': 'AO'},
          {'name': 'Anguilla', 'countryCode': 'AI'},
          {'name': 'Antarctica', 'countryCode': 'AQ'},
          {'name': 'Antigua and Barbuda', 'countryCode': 'AG'},
          {'name': 'Argentina', 'countryCode': 'AR'},
          {'name': 'Armenia', 'countryCode': 'AM'},
          {'name': 'Aruba', 'countryCode': 'AW'},
          {'name': 'Australia', 'countryCode': 'AU'},
          {'name': 'Austria', 'countryCode': 'AT'},
          {'name': 'Azerbaijan', 'countryCode': 'AZ'},
          {'name': 'Bahamas', 'countryCode': 'BS'},
          {'name': 'Bahrain', 'countryCode': 'BH'},
          {'name': 'Bangladesh', 'countryCode': 'BD'},
          {'name': 'Barbados', 'countryCode': 'BB'},
          {'name': 'Belarus', 'countryCode': 'BY'},
          {'name': 'Belgium', 'countryCode': 'BE'},
          {'name': 'Belize', 'countryCode': 'BZ'},
          {'name': 'Benin', 'countryCode': 'BJ'},
          {'name': 'Bermuda', 'countryCode': 'BM'},
          {'name': 'Bhutan', 'countryCode': 'BT'},
          {'name': 'Bolivia', 'countryCode': 'BO'},
          {'name': 'Bosnia and Herzegovina', 'countryCode': 'BA'},
          {'name': 'Botswana', 'countryCode': 'BW'},
          {'name': 'Bouvet Island', 'countryCode': 'BV'},
          {'name': 'Brazil', 'countryCode': 'BR'},
          {'name': 'British Indian Ocean Territory', 'countryCode': 'IO'},
          {'name': 'Brunei Darussalam', 'countryCode': 'BN'},
          {'name': 'Bulgaria', 'countryCode': 'BG'},
          {'name': 'Burkina Faso', 'countryCode': 'BF'},
          {'name': 'Burundi', 'countryCode': 'BI'},
          {'name': 'Cambodia', 'countryCode': 'KH'},
          {'name': 'Cameroon', 'countryCode': 'CM'},
          {'name': 'Canada', 'countryCode': 'CA'},
          {'name': 'Cape Verde', 'countryCode': 'CV'},
          {'name': 'Cayman Islands', 'countryCode': 'KY'},
          {'name': 'Central African Republic', 'countryCode': 'CF'},
          {'name': 'Chad', 'countryCode': 'TD'},
          {'name': 'Chile', 'countryCode': 'CL'},
          {'name': 'China', 'countryCode': 'CN'},
          {'name': 'Christmas Island', 'countryCode': 'CX'},
          {'name': 'Cocos (Keeling) Islands', 'countryCode': 'CC'},
          {'name': 'Colombia', 'countryCode': 'CO'},
          {'name': 'Comoros', 'countryCode': 'KM'},
          {'name': 'Congo', 'countryCode': 'CG'},
          {'name': 'Congo, The Democratic Republic of the', 'countryCode': 'CD'},
          {'name': 'Cook Islands', 'countryCode': 'CK'},
          {'name': 'Costa Rica', 'countryCode': 'CR'},
          {'name': 'Cote DIvoire', 'countryCode': 'CI'},
          {'name': 'Croatia', 'countryCode': 'HR'},
          {'name': 'Cuba', 'countryCode': 'CU'},
          {'name': 'Cyprus', 'countryCode': 'CY'},
          {'name': 'Czech Republic', 'countryCode': 'CZ'},
          {'name': 'Denmark', 'countryCode': 'DK'},
          {'name': 'Djibouti', 'countryCode': 'DJ'},
          {'name': 'Dominica', 'countryCode': 'DM'},
          {'name': 'Dominican Republic', 'countryCode': 'DO'},
          {'name': 'Ecuador', 'countryCode': 'EC'},
          {'name': 'Egypt', 'countryCode': 'EG'},
          {'name': 'El Salvador', 'countryCode': 'SV'},
          {'name': 'Equatorial Guinea', 'countryCode': 'GQ'},
          {'name': 'Eritrea', 'countryCode': 'ER'},
          {'name': 'Estonia', 'countryCode': 'EE'},
          {'name': 'Ethiopia', 'countryCode': 'ET'},
          {'name': 'Falkland Islands (Malvinas)', 'countryCode': 'FK'},
          {'name': 'Faroe Islands', 'countryCode': 'FO'},
          {'name': 'Fiji', 'countryCode': 'FJ'},
          {'name': 'Finland', 'countryCode': 'FI'},
          {'name': 'France', 'countryCode': 'FR'},
          {'name': 'French Guiana', 'countryCode': 'GF'},
          {'name': 'French Polynesia', 'countryCode': 'PF'},
          {'name': 'French Southern Territories', 'countryCode': 'TF'},
          {'name': 'Gabon', 'countryCode': 'GA'},
          {'name': 'Gambia', 'countryCode': 'GM'},
          {'name': 'Georgia', 'countryCode': 'GE'},
          {'name': 'Germany', 'countryCode': 'DE'},
          {'name': 'Ghana', 'countryCode': 'GH'},
          {'name': 'Gibraltar', 'countryCode': 'GI'},
          {'name': 'Greece', 'countryCode': 'GR'},
          {'name': 'Greenland', 'countryCode': 'GL'},
          {'name': 'Grenada', 'countryCode': 'GD'},
          {'name': 'Guadeloupe', 'countryCode': 'GP'},
          {'name': 'Guam', 'countryCode': 'GU'},
          {'name': 'Guatemala', 'countryCode': 'GT'},
          {'name': 'Guernsey', 'countryCode': 'GG'},
          {'name': 'Guinea', 'countryCode': 'GN'},
          {'name': 'Guinea-Bissau', 'countryCode': 'GW'},
          {'name': 'Guyana', 'countryCode': 'GY'},
          {'name': 'Haiti', 'countryCode': 'HT'},
          {'name': 'Heard Island and Mcdonald Islands', 'countryCode': 'HM'},
          {'name': 'Holy See (Vatican City State)', 'countryCode': 'VA'},
          {'name': 'Honduras', 'countryCode': 'HN'},
          {'name': 'Hong Kong', 'countryCode': 'HK'},
          {'name': 'Hungary', 'countryCode': 'HU'},
          {'name': 'Iceland', 'countryCode': 'IS'},
          {'name': 'India', 'countryCode': 'IN'},
          {'name': 'Indonesia', 'countryCode': 'ID'},
          {'name': 'Iran, Islamic Republic Of', 'countryCode': 'IR'},
          {'name': 'Iraq', 'countryCode': 'IQ'},
          {'name': 'Ireland', 'countryCode': 'IE'},
          {'name': 'Isle of Man', 'countryCode': 'IM'},
          {'name': 'Israel', 'countryCode': 'IL'},
          {'name': 'Italy', 'countryCode': 'IT'},
          {'name': 'Jamaica', 'countryCode': 'JM'},
          {'name': 'Japan', 'countryCode': 'JP'},
          {'name': 'Jersey', 'countryCode': 'JE'},
          {'name': 'Jordan', 'countryCode': 'JO'},
          {'name': 'Kazakhstan', 'countryCode': 'KZ'},
          {'name': 'Kenya', 'countryCode': 'KE'},
          {'name': 'Kiribati', 'countryCode': 'KI'},
          {'name': 'Korea, Democratic PeopleS Republic of', 'countryCode': 'KP'},
          {'name': 'Korea, Republic of', 'countryCode': 'KR'},
          {'name': 'Kuwait', 'countryCode': 'KW'},
          {'name': 'Kyrgyzstan', 'countryCode': 'KG'},
          {'name': 'Lao PeopleS Democratic Republic', 'countryCode': 'LA'},
          {'name': 'Latvia', 'countryCode': 'LV'},
          {'name': 'Lebanon', 'countryCode': 'LB'},
          {'name': 'Lesotho', 'countryCode': 'LS'},
          {'name': 'Liberia', 'countryCode': 'LR'},
          {'name': 'Libyan Arab Jamahiriya', 'countryCode': 'LY'},
          {'name': 'Liechtenstein', 'countryCode': 'LI'},
          {'name': 'Lithuania', 'countryCode': 'LT'},
          {'name': 'Luxembourg', 'countryCode': 'LU'},
          {'name': 'Macao', 'countryCode': 'MO'},
          {'name': 'Macedonia, The Former Yugoslav Republic of', 'countryCode': 'MK'},
          {'name': 'Madagascar', 'countryCode': 'MG'},
          {'name': 'Malawi', 'countryCode': 'MW'},
          {'name': 'Malaysia', 'countryCode': 'MY'},
          {'name': 'Maldives', 'countryCode': 'MV'},
          {'name': 'Mali', 'countryCode': 'ML'},
          {'name': 'Malta', 'countryCode': 'MT'},
          {'name': 'Marshall Islands', 'countryCode': 'MH'},
          {'name': 'Martinique', 'countryCode': 'MQ'},
          {'name': 'Mauritania', 'countryCode': 'MR'},
          {'name': 'Mauritius', 'countryCode': 'MU'},
          {'name': 'Mayotte', 'countryCode': 'YT'},
          {'name': 'Mexico', 'countryCode': 'MX'},
          {'name': 'Micronesia, Federated States of', 'countryCode': 'FM'},
          {'name': 'Moldova, Republic of', 'countryCode': 'MD'},
          {'name': 'Monaco', 'countryCode': 'MC'},
          {'name': 'Mongolia', 'countryCode': 'MN'},
          {'name': 'Montserrat', 'countryCode': 'MS'},
          {'name': 'Morocco', 'countryCode': 'MA'},
          {'name': 'Mozambique', 'countryCode': 'MZ'},
          {'name': 'Myanmar', 'countryCode': 'MM'},
          {'name': 'Namibia', 'countryCode': 'NA'},
          {'name': 'Nauru', 'countryCode': 'NR'},
          {'name': 'Nepal', 'countryCode': 'NP'},
          {'name': 'Netherlands', 'countryCode': 'NL'},
          {'name': 'Netherlands Antilles', 'countryCode': 'AN'},
          {'name': 'New Caledonia', 'countryCode': 'NC'},
          {'name': 'New Zealand', 'countryCode': 'NZ'},
          {'name': 'Nicaragua', 'countryCode': 'NI'},
          {'name': 'Niger', 'countryCode': 'NE'},
          {'name': 'Nigeria', 'countryCode': 'NG'},
          {'name': 'Niue', 'countryCode': 'NU'},
          {'name': 'Norfolk Island', 'countryCode': 'NF'},
          {'name': 'Northern Mariana Islands', 'countryCode': 'MP'},
          {'name': 'Norway', 'countryCode': 'NO'},
          {'name': 'Oman', 'countryCode': 'OM'},
          {'name': 'Pakistan', 'countryCode': 'PK'},
          {'name': 'Palau', 'countryCode': 'PW'},
          {'name': 'Palestinian Territory, Occupied', 'countryCode': 'PS'},
          {'name': 'Panama', 'countryCode': 'PA'},
          {'name': 'Papua New Guinea', 'countryCode': 'PG'},
          {'name': 'Paraguay', 'countryCode': 'PY'},
          {'name': 'Peru', 'countryCode': 'PE'},
          {'name': 'Philippines', 'countryCode': 'PH'},
          {'name': 'Pitcairn', 'countryCode': 'PN'},
          {'name': 'Poland', 'countryCode': 'PL'},
          {'name': 'Portugal', 'countryCode': 'PT'},
          {'name': 'Puerto Rico', 'countryCode': 'PR'},
          {'name': 'Qatar', 'countryCode': 'QA'},
          {'name': 'Reunion', 'countryCode': 'RE'},
          {'name': 'Romania', 'countryCode': 'RO'},
          {'name': 'Russian Federation', 'countryCode': 'RU'},
          {'name': 'RWANDA', 'countryCode': 'RW'},
          {'name': 'Saint Helena', 'countryCode': 'SH'},
          {'name': 'Saint Kitts and Nevis', 'countryCode': 'KN'},
          {'name': 'Saint Lucia', 'countryCode': 'LC'},
          {'name': 'Saint Pierre and Miquelon', 'countryCode': 'PM'},
          {'name': 'Saint Vincent and the Grenadines', 'countryCode': 'VC'},
          {'name': 'Samoa', 'countryCode': 'WS'},
          {'name': 'San Marino', 'countryCode': 'SM'},
          {'name': 'Sao Tome and Principe', 'countryCode': 'ST'},
          {'name': 'Saudi Arabia', 'countryCode': 'SA'},
          {'name': 'Senegal', 'countryCode': 'SN'},
          {'name': 'Serbia and Montenegro', 'countryCode': 'CS'},
          {'name': 'Seychelles', 'countryCode': 'SC'},
          {'name': 'Sierra Leone', 'countryCode': 'SL'},
          {'name': 'Singapore', 'countryCode': 'SG'},
          {'name': 'Slovakia', 'countryCode': 'SK'},
          {'name': 'Slovenia', 'countryCode': 'SI'},
          {'name': 'Solomon Islands', 'countryCode': 'SB'},
          {'name': 'Somalia', 'countryCode': 'SO'},
          {'name': 'South Africa', 'countryCode': 'ZA'},
          {'name': 'South Georgia and the South Sandwich Islands', 'countryCode': 'GS'},
          {'name': 'Spain', 'countryCode': 'ES'},
          {'name': 'Sri Lanka', 'countryCode': 'LK'},
          {'name': 'Sudan', 'countryCode': 'SD'},
          {'name': 'Suriname', 'countryCode': 'SR'},
          {'name': 'Svalbard and Jan Mayen', 'countryCode': 'SJ'},
          {'name': 'Swaziland', 'countryCode': 'SZ'},
          {'name': 'Sweden', 'countryCode': 'SE'},
          {'name': 'Switzerland', 'countryCode': 'CH'},
          {'name': 'Syrian Arab Republic', 'countryCode': 'SY'},
          {'name': 'Taiwan, Province of China', 'countryCode': 'TW'},
          {'name': 'Tajikistan', 'countryCode': 'TJ'},
          {'name': 'Tanzania, United Republic of', 'countryCode': 'TZ'},
          {'name': 'Thailand', 'countryCode': 'TH'},
          {'name': 'Timor-Leste', 'countryCode': 'TL'},
          {'name': 'Togo', 'countryCode': 'TG'},
          {'name': 'Tokelau', 'countryCode': 'TK'},
          {'name': 'Tonga', 'countryCode': 'TO'},
          {'name': 'Trinidad and Tobago', 'countryCode': 'TT'},
          {'name': 'Tunisia', 'countryCode': 'TN'},
          {'name': 'Turkey', 'countryCode': 'TR'},
          {'name': 'Turkmenistan', 'countryCode': 'TM'},
          {'name': 'Turks and Caicos Islands', 'countryCode': 'TC'},
          {'name': 'Tuvalu', 'countryCode': 'TV'},
          {'name': 'Uganda', 'countryCode': 'UG'},
          {'name': 'Ukraine', 'countryCode': 'UA'},
          {'name': 'United Arab Emirates', 'countryCode': 'AE'},
          {'name': 'United Kingdom', 'countryCode': 'GB'},
          {'name': 'United States', 'countryCode': 'US'},
          {'name': 'United States Minor Outlying Islands', 'countryCode': 'UM'},
          {'name': 'Uruguay', 'countryCode': 'UY'},
          {'name': 'Uzbekistan', 'countryCode': 'UZ'},
          {'name': 'Vanuatu', 'countryCode': 'VU'},
          {'name': 'Venezuela', 'countryCode': 'VE'},
          {'name': 'Viet Nam', 'countryCode': 'VN'},
          {'name': 'Virgin Islands, British', 'countryCode': 'VG'},
          {'name': 'Virgin Islands, U.S.', 'countryCode': 'VI'},
          {'name': 'Wallis and Futuna', 'countryCode': 'WF'},
          {'name': 'Western Sahara', 'countryCode': 'EH'},
          {'name': 'Yemen', 'countryCode': 'YE'},
          {'name': 'Zambia', 'countryCode': 'ZM'},
          {'name': 'Zimbabwe', 'countryCode': 'ZW'}
        ],
        verticalDimensionsList: [],
        horizontalDimensionsList: [],
        outsideDimensionsList: [],
        verticalDimensionsSelected: [],
        horizontalDimensionsSelected: [],
        outsideDimensionsSelected: [],
        dimensionsSelected: [],
        leftSelected: [],
        rightSelected: [],
        rightSelected1: [],
        rightSelected2: [],
        showalert: false,
        dialog: false
      }
    },
    methods: {
      multiselect_rightAll: function (leftList, rightList) {
        leftList.forEach(x => {
          // checking if option already exists
          const rightIndex = rightList.findIndex(z => z === x)
          //  if option already exists it does not push
          if (!(rightIndex > -1)) {
            rightList.push(x)
          }
        })
        // emptying the array
        leftList = []
        this.dimensionsList = leftList // not sure of this step.
        this.showalert = false
      },
      multiselect_leftAll: function (rightList, leftList, axes) {
        rightList.forEach(x => {
          const rightIndex = leftList.findIndex(z => z === x)
          if (!(rightIndex > -1)) {
            leftList.push(x)
          }
        })
        // emptying the array
        rightList = []
        if (axes === 'vertical') {
          this.verticalDimensionsList = rightList
        } else if (axes === 'horizontal') {
          this.horizontalDimensionsList = rightList
        } else if (axes === 'outside') {
          this.outsideDimensionsList = rightList
        }
        this.showalert = false
      },
      multiselect_rightSelected: function (dimensionsSelected, dimensionsList, axesDimensionsList) {
        this.showalert = dimensionsSelected.length === 0
        dimensionsSelected.forEach(x => {
          const leftIndex = dimensionsList.findIndex(y => y === x)
          dimensionsList.splice(leftIndex, 1)
          const rightIndex = axesDimensionsList.findIndex(z => z === x)
          if (!(rightIndex > -1)) {
            axesDimensionsList.push(x)
          }
        })
      },
      multiselect_leftSelected: function (axesDimensionsSelected, axesDimensionsList, dimensionsList) {
        this.showalert = axesDimensionsSelected.length === 0
        axesDimensionsSelected.forEach(x => {
          const rightIndex = axesDimensionsList.findIndex(y => y === x)
          axesDimensionsList.splice(rightIndex, 1)
          const leftIndex = dimensionsList.findIndex(z => z === x)
          if (!(leftIndex > -1)) {
            dimensionsList.push(x)
          }
        })
      },
      /* this code is not working list and selected ones are getting undefined...
      moveElementInArray: function (positionChange, verticalDimensionsList, verticalDimensionsSelected) {
        let oldIndex = verticalDimensionsList.findIndex(y => y.name === verticalDimensionsSelected[0].name)
        if (oldIndex > -1) {
          let newIndex = (oldIndex + positionChange)

          if (newIndex < 0) {
            newIndex = 0
          } else if (newIndex >= verticalDimensionsList.length) {
            newIndex = verticalDimensionsList.length
          }

          let arrayClone = verticalDimensionsList.slice()
          arrayClone.splice(oldIndex, 1)
          arrayClone.splice(newIndex, 0, verticalDimensionsSelected[0])
          verticalDimensionsList = arrayClone
          return verticalDimensionsList
        }
        return verticalDimensionsList
      }, */
      moveElementInArray: function (positionChange) {
        let oldIndex = this.verticalDimensionsList.findIndex(y => y.name === this.verticalDimensionsSelected[0].name)
        if (oldIndex > -1) {
          let newIndex = (oldIndex + positionChange)
          if (newIndex < 0) {
            newIndex = 0
          } else if (newIndex >= this.verticalDimensionsList.length) {
            newIndex = this.verticalDimensionsList.length
          }
          let arrayClone = this.verticalDimensionsList.slice()
          arrayClone.splice(oldIndex, 1)
          arrayClone.splice(newIndex, 0, this.verticalDimensionsSelected[0])
          this.verticalDimensionsList = arrayClone
          return this.verticalDimensionsList
        }
        return this.rightOptions
      },
      alertLog: function () {
        alert('clicked')
      }
    },
    computed: {
        /**
         *
         * @returns *[] sorted leftOptions array
         */
      sortedLeftOptions: function () {
        return this.leftOptions.sort((a, b) => a.name.localeCompare(b.name))
      }
    }
  }
</script>
<style type="text/css">
  .list-vertical {
    height: 140px;
    overflow-y: scroll;
    margin: 0;
    min-height: 140px;
    background:#f8f8f8;
    color: #ef6c00;
  }
  .list-vertical li {
    margin-bottom: 6px;
  }
</style>
