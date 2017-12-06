# reactive-stocks
A reactive web app that tracks stock prices for you.

It is intended to:
* Provide Angular front end to store user specific stocks.
* Store historical and real-time stock price data.
    * Data will be provided by querying a public API.
    * Price changes will be published to Apache Kafka topic.
* Display interactive D3.js graphs of the historical stock prices.
* In future will recommend similar stocks.