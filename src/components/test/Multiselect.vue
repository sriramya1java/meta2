<template>
  <div>
    <div class="row align-items-center justify-content-center">
      <div class="col-xs-3 alert alert-warning" v-if="showalert" style="margin: 10px;" role="alert">
        Please select at lease one option
      </div>
    </div>
    <div class="row">
      <div class="col-xs-5">
        <select class="form-control" id="leftOptions" v-model="leftSelected" multiple="multiple" style="min-height: 505px;background:#f8f8f8; color: #0d47a1">
          <option v-for="optionLeft in leftOptions" v-bind:value="optionLeft">{{ optionLeft.countryCode }}</option>
        </select>
      </div>
      <div class="col-xs-5">
        <div class="row">
          <div class="col-xs-2">
            <button type="button" id="multiselect_rightAll" class="btn btn-block" v-on:click="multiselect_rightAll()"><i class="glyphicon glyphicon-forward"></i></button>
            <button type="button" id="multiselect_rightSelected" class="btn btn-block"  v-on:click="multiselect_rightSelected()"><i class="glyphicon glyphicon-chevron-right"></i></button>
            <button type="button" id="multiselect_leftSelected" class="btn btn-block" v-on:click="multiselect_leftSelected()"><i class="glyphicon glyphicon-chevron-left"></i></button>
            <button type="button" id="multiselect_leftAll" class="btn btn-block"  v-on:click="multiselect_leftAll()"><i class="glyphicon glyphicon-backward"></i></button>
          </div>
          <div class="col-xs-8 text-left">
            <h6>vertical axis:</h6>
            <select class="form-control" id="dataset_id" v-model="rightSelected"  multiple="multiple" style="min-height: 140px;background:#f8f8f8; color: #ef6c00;">
              <option v-for="optionRight in rightOptions" v-bind:value="optionRight">{{ optionRight.countryCode }}</option>
            </select>
          </div>
          <div class="col-xs-2" style="margin-top: 50px">
            <button type="button" class="btn btn-block"><i class="glyphicon glyphicon-chevron-down"></i></button>
            <button type="button" class="btn btn-block"><i class="glyphicon glyphicon-chevron-up"></i></button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2">
            <button type="button" id="multiselect_rightAll1" class="btn btn-block" v-on:click="multiselect_rightAll_one()"><i class="glyphicon glyphicon-forward"></i></button>
            <button type="button" id="multiselect_rightSelected1" class="btn btn-block"  v-on:click="multiselect_rightSelected_one()"><i class="glyphicon glyphicon-chevron-right"></i></button>
            <button type="button" id="multiselect_leftSelected1" class="btn btn-block" v-on:click="multiselect_leftSelected_one()"><i class="glyphicon glyphicon-chevron-left"></i></button>
            <button type="button" id="multiselect_leftAll1" class="btn btn-block"  v-on:click="multiselect_leftAll_one()"><i class="glyphicon glyphicon-backward"></i></button>
          </div>
          <div class="col-xs-8 text-left">
            <h6>horizontal axis:</h6>
            <select class="form-control" id="dataset_id1" v-model="rightSelected1"  multiple="multiple" style="min-height: 140px;background:#f8f8f8; color: #ef6c00;">
              <option v-for="optionRight1 in rightOptions1" v-bind:value="optionRight1">{{ optionRight1.countryCode }}</option>
            </select>
          </div>
          <div class="col-xs-2" style="margin-top: 50px">
            <button type="button" class="btn btn-block"><i class="glyphicon glyphicon-chevron-down"></i></button>
            <button type="button" class="btn btn-block"><i class="glyphicon glyphicon-chevron-up"></i></button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2">
            <button type="button" id="multiselect_rightAll2" class="btn btn-block" v-on:click="multiselect_rightAll_two()"><i class="glyphicon glyphicon-forward"></i></button>
            <button type="button" id="multiselect_rightSelected2" class="btn btn-block"  v-on:click="multiselect_rightSelected_two()"><i class="glyphicon glyphicon-chevron-right"></i></button>
            <button type="button" id="multiselect_leftSelected2" class="btn btn-block" v-on:click="multiselect_leftSelected_two()"><i class="glyphicon glyphicon-chevron-left"></i></button>
            <button type="button" id="multiselect_leftAll2" class="btn btn-block"  v-on:click="multiselect_leftAll_two()"><i class="glyphicon glyphicon-backward"></i></button>
          </div>
          <div class="col-xs-8 text-left">
            <h6>outside of table:</h6>
            <select class="form-control" id="dataset_id2" v-model="rightSelected2"  multiple="multiple" style="min-height: 140px;background:#f8f8f8; color: #ef6c00;">
              <option v-for="optionRight2 in rightOptions2" v-bind:value="optionRight2">{{ optionRight2.countryCode }}</option>
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
  export default {
    name: 'multiselect',
    data () {
      return {
        leftOptions: [
          {'countryCode': 'Afghanistan', 'countryName': 'AF'},
          {'countryCode': 'Aland Islands', 'countryName': 'AX'},
          {'countryCode': 'Albania', 'countryName': 'AL'},
          {'countryCode': 'Algeria', 'countryName': 'DZ'},
          {'countryCode': 'American Samoa', 'countryName': 'AS'},
          {'countryCode': 'AndorrA', 'countryName': 'AD'},
          {'countryCode': 'Angola', 'countryName': 'AO'},
          {'countryCode': 'Anguilla', 'countryName': 'AI'},
          {'countryCode': 'Antarctica', 'countryName': 'AQ'},
          {'countryCode': 'Antigua and Barbuda', 'countryName': 'AG'},
          {'countryCode': 'Argentina', 'countryName': 'AR'},
          {'countryCode': 'Armenia', 'countryName': 'AM'},
          {'countryCode': 'Aruba', 'countryName': 'AW'},
          {'countryCode': 'Australia', 'countryName': 'AU'},
          {'countryCode': 'Austria', 'countryName': 'AT'},
          {'countryCode': 'Azerbaijan', 'countryName': 'AZ'},
          {'countryCode': 'Bahamas', 'countryName': 'BS'},
          {'countryCode': 'Bahrain', 'countryName': 'BH'},
          {'countryCode': 'Bangladesh', 'countryName': 'BD'},
          {'countryCode': 'Barbados', 'countryName': 'BB'},
          {'countryCode': 'Belarus', 'countryName': 'BY'},
          {'countryCode': 'Belgium', 'countryName': 'BE'},
          {'countryCode': 'Belize', 'countryName': 'BZ'},
          {'countryCode': 'Benin', 'countryName': 'BJ'},
          {'countryCode': 'Bermuda', 'countryName': 'BM'},
          {'countryCode': 'Bhutan', 'countryName': 'BT'},
          {'countryCode': 'Bolivia', 'countryName': 'BO'},
          {'countryCode': 'Bosnia and Herzegovina', 'countryName': 'BA'},
          {'countryCode': 'Botswana', 'countryName': 'BW'},
          {'countryCode': 'Bouvet Island', 'countryName': 'BV'},
          {'countryCode': 'Brazil', 'countryName': 'BR'},
          {'countryCode': 'British Indian Ocean Territory', 'countryName': 'IO'},
          {'countryCode': 'Brunei Darussalam', 'countryName': 'BN'},
          {'countryCode': 'Bulgaria', 'countryName': 'BG'},
          {'countryCode': 'Burkina Faso', 'countryName': 'BF'},
          {'countryCode': 'Burundi', 'countryName': 'BI'},
          {'countryCode': 'Cambodia', 'countryName': 'KH'},
          {'countryCode': 'Cameroon', 'countryName': 'CM'},
          {'countryCode': 'Canada', 'countryName': 'CA'},
          {'countryCode': 'Cape Verde', 'countryName': 'CV'},
          {'countryCode': 'Cayman Islands', 'countryName': 'KY'},
          {'countryCode': 'Central African Republic', 'countryName': 'CF'},
          {'countryCode': 'Chad', 'countryName': 'TD'},
          {'countryCode': 'Chile', 'countryName': 'CL'},
          {'countryCode': 'China', 'countryName': 'CN'},
          {'countryCode': 'Christmas Island', 'countryName': 'CX'},
          {'countryCode': 'Cocos (Keeling) Islands', 'countryName': 'CC'},
          {'countryCode': 'Colombia', 'countryName': 'CO'},
          {'countryCode': 'Comoros', 'countryName': 'KM'},
          {'countryCode': 'Congo', 'countryName': 'CG'},
          {'countryCode': 'Congo, The Democratic Republic of the', 'countryName': 'CD'},
          {'countryCode': 'Cook Islands', 'countryName': 'CK'},
          {'countryCode': 'Costa Rica', 'countryName': 'CR'},
          {'countryCode': 'Cote DIvoire', 'countryName': 'CI'},
          {'countryCode': 'Croatia', 'countryName': 'HR'},
          {'countryCode': 'Cuba', 'countryName': 'CU'},
          {'countryCode': 'Cyprus', 'countryName': 'CY'},
          {'countryCode': 'Czech Republic', 'countryName': 'CZ'},
          {'countryCode': 'Denmark', 'countryName': 'DK'},
          {'countryCode': 'Djibouti', 'countryName': 'DJ'},
          {'countryCode': 'Dominica', 'countryName': 'DM'},
          {'countryCode': 'Dominican Republic', 'countryName': 'DO'},
          {'countryCode': 'Ecuador', 'countryName': 'EC'},
          {'countryCode': 'Egypt', 'countryName': 'EG'},
          {'countryCode': 'El Salvador', 'countryName': 'SV'},
          {'countryCode': 'Equatorial Guinea', 'countryName': 'GQ'},
          {'countryCode': 'Eritrea', 'countryName': 'ER'},
          {'countryCode': 'Estonia', 'countryName': 'EE'},
          {'countryCode': 'Ethiopia', 'countryName': 'ET'},
          {'countryCode': 'Falkland Islands (Malvinas)', 'countryName': 'FK'},
          {'countryCode': 'Faroe Islands', 'countryName': 'FO'},
          {'countryCode': 'Fiji', 'countryName': 'FJ'},
          {'countryCode': 'Finland', 'countryName': 'FI'},
          {'countryCode': 'France', 'countryName': 'FR'},
          {'countryCode': 'French Guiana', 'countryName': 'GF'},
          {'countryCode': 'French Polynesia', 'countryName': 'PF'},
          {'countryCode': 'French Southern Territories', 'countryName': 'TF'},
          {'countryCode': 'Gabon', 'countryName': 'GA'},
          {'countryCode': 'Gambia', 'countryName': 'GM'},
          {'countryCode': 'Georgia', 'countryName': 'GE'},
          {'countryCode': 'Germany', 'countryName': 'DE'},
          {'countryCode': 'Ghana', 'countryName': 'GH'},
          {'countryCode': 'Gibraltar', 'countryName': 'GI'},
          {'countryCode': 'Greece', 'countryName': 'GR'},
          {'countryCode': 'Greenland', 'countryName': 'GL'},
          {'countryCode': 'Grenada', 'countryName': 'GD'},
          {'countryCode': 'Guadeloupe', 'countryName': 'GP'},
          {'countryCode': 'Guam', 'countryName': 'GU'},
          {'countryCode': 'Guatemala', 'countryName': 'GT'},
          {'countryCode': 'Guernsey', 'countryName': 'GG'},
          {'countryCode': 'Guinea', 'countryName': 'GN'},
          {'countryCode': 'Guinea-Bissau', 'countryName': 'GW'},
          {'countryCode': 'Guyana', 'countryName': 'GY'},
          {'countryCode': 'Haiti', 'countryName': 'HT'},
          {'countryCode': 'Heard Island and Mcdonald Islands', 'countryName': 'HM'},
          {'countryCode': 'Holy See (Vatican City State)', 'countryName': 'VA'},
          {'countryCode': 'Honduras', 'countryName': 'HN'},
          {'countryCode': 'Hong Kong', 'countryName': 'HK'},
          {'countryCode': 'Hungary', 'countryName': 'HU'},
          {'countryCode': 'Iceland', 'countryName': 'IS'},
          {'countryCode': 'India', 'countryName': 'IN'},
          {'countryCode': 'Indonesia', 'countryName': 'ID'},
          {'countryCode': 'Iran, Islamic Republic Of', 'countryName': 'IR'},
          {'countryCode': 'Iraq', 'countryName': 'IQ'},
          {'countryCode': 'Ireland', 'countryName': 'IE'},
          {'countryCode': 'Isle of Man', 'countryName': 'IM'},
          {'countryCode': 'Israel', 'countryName': 'IL'},
          {'countryCode': 'Italy', 'countryName': 'IT'},
          {'countryCode': 'Jamaica', 'countryName': 'JM'},
          {'countryCode': 'Japan', 'countryName': 'JP'},
          {'countryCode': 'Jersey', 'countryName': 'JE'},
          {'countryCode': 'Jordan', 'countryName': 'JO'},
          {'countryCode': 'Kazakhstan', 'countryName': 'KZ'},
          {'countryCode': 'Kenya', 'countryName': 'KE'},
          {'countryCode': 'Kiribati', 'countryName': 'KI'},
          {'countryCode': 'Korea, Democratic PeopleS Republic of', 'countryName': 'KP'},
          {'countryCode': 'Korea, Republic of', 'countryName': 'KR'},
          {'countryCode': 'Kuwait', 'countryName': 'KW'},
          {'countryCode': 'Kyrgyzstan', 'countryName': 'KG'},
          {'countryCode': 'Lao PeopleS Democratic Republic', 'countryName': 'LA'},
          {'countryCode': 'Latvia', 'countryName': 'LV'},
          {'countryCode': 'Lebanon', 'countryName': 'LB'},
          {'countryCode': 'Lesotho', 'countryName': 'LS'},
          {'countryCode': 'Liberia', 'countryName': 'LR'},
          {'countryCode': 'Libyan Arab Jamahiriya', 'countryName': 'LY'},
          {'countryCode': 'Liechtenstein', 'countryName': 'LI'},
          {'countryCode': 'Lithuania', 'countryName': 'LT'},
          {'countryCode': 'Luxembourg', 'countryName': 'LU'},
          {'countryCode': 'Macao', 'countryName': 'MO'},
          {'countryCode': 'Macedonia, The Former Yugoslav Republic of', 'countryName': 'MK'},
          {'countryCode': 'Madagascar', 'countryName': 'MG'},
          {'countryCode': 'Malawi', 'countryName': 'MW'},
          {'countryCode': 'Malaysia', 'countryName': 'MY'},
          {'countryCode': 'Maldives', 'countryName': 'MV'},
          {'countryCode': 'Mali', 'countryName': 'ML'},
          {'countryCode': 'Malta', 'countryName': 'MT'},
          {'countryCode': 'Marshall Islands', 'countryName': 'MH'},
          {'countryCode': 'Martinique', 'countryName': 'MQ'},
          {'countryCode': 'Mauritania', 'countryName': 'MR'},
          {'countryCode': 'Mauritius', 'countryName': 'MU'},
          {'countryCode': 'Mayotte', 'countryName': 'YT'},
          {'countryCode': 'Mexico', 'countryName': 'MX'},
          {'countryCode': 'Micronesia, Federated States of', 'countryName': 'FM'},
          {'countryCode': 'Moldova, Republic of', 'countryName': 'MD'},
          {'countryCode': 'Monaco', 'countryName': 'MC'},
          {'countryCode': 'Mongolia', 'countryName': 'MN'},
          {'countryCode': 'Montserrat', 'countryName': 'MS'},
          {'countryCode': 'Morocco', 'countryName': 'MA'},
          {'countryCode': 'Mozambique', 'countryName': 'MZ'},
          {'countryCode': 'Myanmar', 'countryName': 'MM'},
          {'countryCode': 'Namibia', 'countryName': 'NA'},
          {'countryCode': 'Nauru', 'countryName': 'NR'},
          {'countryCode': 'Nepal', 'countryName': 'NP'},
          {'countryCode': 'Netherlands', 'countryName': 'NL'},
          {'countryCode': 'Netherlands Antilles', 'countryName': 'AN'},
          {'countryCode': 'New Caledonia', 'countryName': 'NC'},
          {'countryCode': 'New Zealand', 'countryName': 'NZ'},
          {'countryCode': 'Nicaragua', 'countryName': 'NI'},
          {'countryCode': 'Niger', 'countryName': 'NE'},
          {'countryCode': 'Nigeria', 'countryName': 'NG'},
          {'countryCode': 'Niue', 'countryName': 'NU'},
          {'countryCode': 'Norfolk Island', 'countryName': 'NF'},
          {'countryCode': 'Northern Mariana Islands', 'countryName': 'MP'},
          {'countryCode': 'Norway', 'countryName': 'NO'},
          {'countryCode': 'Oman', 'countryName': 'OM'},
          {'countryCode': 'Pakistan', 'countryName': 'PK'},
          {'countryCode': 'Palau', 'countryName': 'PW'},
          {'countryCode': 'Palestinian Territory, Occupied', 'countryName': 'PS'},
          {'countryCode': 'Panama', 'countryName': 'PA'},
          {'countryCode': 'Papua New Guinea', 'countryName': 'PG'},
          {'countryCode': 'Paraguay', 'countryName': 'PY'},
          {'countryCode': 'Peru', 'countryName': 'PE'},
          {'countryCode': 'Philippines', 'countryName': 'PH'},
          {'countryCode': 'Pitcairn', 'countryName': 'PN'},
          {'countryCode': 'Poland', 'countryName': 'PL'},
          {'countryCode': 'Portugal', 'countryName': 'PT'},
          {'countryCode': 'Puerto Rico', 'countryName': 'PR'},
          {'countryCode': 'Qatar', 'countryName': 'QA'},
          {'countryCode': 'Reunion', 'countryName': 'RE'},
          {'countryCode': 'Romania', 'countryName': 'RO'},
          {'countryCode': 'Russian Federation', 'countryName': 'RU'},
          {'countryCode': 'RWANDA', 'countryName': 'RW'},
          {'countryCode': 'Saint Helena', 'countryName': 'SH'},
          {'countryCode': 'Saint Kitts and Nevis', 'countryName': 'KN'},
          {'countryCode': 'Saint Lucia', 'countryName': 'LC'},
          {'countryCode': 'Saint Pierre and Miquelon', 'countryName': 'PM'},
          {'countryCode': 'Saint Vincent and the Grenadines', 'countryName': 'VC'},
          {'countryCode': 'Samoa', 'countryName': 'WS'},
          {'countryCode': 'San Marino', 'countryName': 'SM'},
          {'countryCode': 'Sao Tome and Principe', 'countryName': 'ST'},
          {'countryCode': 'Saudi Arabia', 'countryName': 'SA'},
          {'countryCode': 'Senegal', 'countryName': 'SN'},
          {'countryCode': 'Serbia and Montenegro', 'countryName': 'CS'},
          {'countryCode': 'Seychelles', 'countryName': 'SC'},
          {'countryCode': 'Sierra Leone', 'countryName': 'SL'},
          {'countryCode': 'Singapore', 'countryName': 'SG'},
          {'countryCode': 'Slovakia', 'countryName': 'SK'},
          {'countryCode': 'Slovenia', 'countryName': 'SI'},
          {'countryCode': 'Solomon Islands', 'countryName': 'SB'},
          {'countryCode': 'Somalia', 'countryName': 'SO'},
          {'countryCode': 'South Africa', 'countryName': 'ZA'},
          {'countryCode': 'South Georgia and the South Sandwich Islands', 'countryName': 'GS'},
          {'countryCode': 'Spain', 'countryName': 'ES'},
          {'countryCode': 'Sri Lanka', 'countryName': 'LK'},
          {'countryCode': 'Sudan', 'countryName': 'SD'},
          {'countryCode': 'SuricountryCode', 'countryName': 'SR'},
          {'countryCode': 'Svalbard and Jan Mayen', 'countryName': 'SJ'},
          {'countryCode': 'Swaziland', 'countryName': 'SZ'},
          {'countryCode': 'Sweden', 'countryName': 'SE'},
          {'countryCode': 'Switzerland', 'countryName': 'CH'},
          {'countryCode': 'Syrian Arab Republic', 'countryName': 'SY'},
          {'countryCode': 'Taiwan, Province of China', 'countryName': 'TW'},
          {'countryCode': 'Tajikistan', 'countryName': 'TJ'},
          {'countryCode': 'Tanzania, United Republic of', 'countryName': 'TZ'},
          {'countryCode': 'Thailand', 'countryName': 'TH'},
          {'countryCode': 'Timor-Leste', 'countryName': 'TL'},
          {'countryCode': 'Togo', 'countryName': 'TG'},
          {'countryCode': 'Tokelau', 'countryName': 'TK'},
          {'countryCode': 'Tonga', 'countryName': 'TO'},
          {'countryCode': 'Trinidad and Tobago', 'countryName': 'TT'},
          {'countryCode': 'Tunisia', 'countryName': 'TN'},
          {'countryCode': 'Turkey', 'countryName': 'TR'},
          {'countryCode': 'Turkmenistan', 'countryName': 'TM'},
          {'countryCode': 'Turks and Caicos Islands', 'countryName': 'TC'},
          {'countryCode': 'Tuvalu', 'countryName': 'TV'},
          {'countryCode': 'Uganda', 'countryName': 'UG'},
          {'countryCode': 'Ukraine', 'countryName': 'UA'},
          {'countryCode': 'United Arab Emirates', 'countryName': 'AE'},
          {'countryCode': 'United Kingdom', 'countryName': 'GB'},
          {'countryCode': 'United States', 'countryName': 'US'},
          {'countryCode': 'United States Minor Outlying Islands', 'countryName': 'UM'},
          {'countryCode': 'Uruguay', 'countryName': 'UY'},
          {'countryCode': 'Uzbekistan', 'countryName': 'UZ'},
          {'countryCode': 'Vanuatu', 'countryName': 'VU'},
          {'countryCode': 'Venezuela', 'countryName': 'VE'},
          {'countryCode': 'Viet Nam', 'countryName': 'VN'},
          {'countryCode': 'Virgin Islands, British', 'countryName': 'VG'},
          {'countryCode': 'Virgin Islands, U.S.', 'countryName': 'VI'},
          {'countryCode': 'Wallis and Futuna', 'countryName': 'WF'},
          {'countryCode': 'Western Sahara', 'countryName': 'EH'},
          {'countryCode': 'Yemen', 'countryName': 'YE'},
          {'countryCode': 'Zambia', 'countryName': 'ZM'},
          {'countryCode': 'Zimbabwe', 'countryName': 'ZW'}
        ],
        rightOptions: [],
        rightOptions1: [],
        rightOptions2: [],
        leftSelected: [],
        rightSelected: [],
        rightSelected1: [],
        rightSelected2: [],
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
        // emptying the array
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
      },
      multiselect_rightAll_one: function () {
        this.leftOptions.forEach(x => {
          // checking if option already exists
          const rightIndex1 = this.rightOptions1.findIndex(z => z === x)
          //  if option already exists it does not push
          if (!(rightIndex1 > -1)) {
            this.rightOptions1.push(x)
          }
        })
        // emptying the array
        this.leftOptions = []
        this.showalert = false
      },
      multiselect_leftAll_one: function () {
        this.rightOptions1.forEach(x => {
          const rightIndex1 = this.leftOptions.findIndex(z => z === x)
          if (!(rightIndex1 > -1)) {
            this.leftOptions.push(x)
          }
        })
        this.rightOptions1 = []
        this.showalert = false
      },
      multiselect_rightSelected_one: function () {
        this.showalert = this.leftSelected.length === 0
        this.leftSelected.forEach(x => {
          const leftIndex1 = this.leftOptions.findIndex(y => y === x)
          this.leftOptions.splice(leftIndex1, 1)
          const rightIndex1 = this.rightOptions1.findIndex(z => z === x)
          if (!(rightIndex1 > -1)) {
            this.rightOptions1.push(x)
          }
        })
      },
      multiselect_leftSelected_one: function () {
        this.showalert = this.rightSelected1.length === 0
        this.rightSelected1.forEach(x => {
          const rightIndex1 = this.rightOptions1.findIndex(y => y === x)
          this.rightOptions1.splice(rightIndex1, 1)
          const leftIndex1 = this.leftOptions.findIndex(z => z === x)
          if (!(leftIndex1 > -1)) {
            this.leftOptions.push(x)
          }
        })
      },
      multiselect_rightAll_two: function () {
        this.leftOptions.forEach(x => {
          // checking if option already exists
          const rightIndex2 = this.rightOptions2.findIndex(z => z === x)
          //  if option already exists it does not push
          if (!(rightIndex2 > -1)) {
            this.rightOptions2.push(x)
          }
        })
        // emptying the array
        this.leftOptions = []
        this.showalert = false
      },
      multiselect_leftAll_two: function () {
        this.rightOptions2.forEach(x => {
          const rightIndex2 = this.leftOptions.findIndex(z => z === x)
          if (!(rightIndex2 > -1)) {
            this.leftOptions.push(x)
          }
        })
        this.rightOptions2 = []
        this.showalert = false
      },
      multiselect_rightSelected_two: function () {
        this.showalert = this.leftSelected.length === 0
        this.leftSelected.forEach(x => {
          const leftIndex2 = this.leftOptions.findIndex(y => y === x)
          this.leftOptions.splice(leftIndex2, 1)
          const rightIndex2 = this.rightOptions1.findIndex(z => z === x)
          if (!(rightIndex2 > -1)) {
            this.rightOptions2.push(x)
          }
        })
      },
      multiselect_leftSelected_two: function () {
        this.showalert = this.rightSelected2.length === 0
        this.rightSelected2.forEach(x => {
          const rightIndex2 = this.rightOptions2.findIndex(y => y === x)
          this.rightOptions2.splice(rightIndex2, 1)
          const leftIndex2 = this.leftOptions.findIndex(z => z === x)
          if (!(leftIndex2 > -1)) {
            this.leftOptions.push(x)
          }
        })
      }
    }
  }
</script>
