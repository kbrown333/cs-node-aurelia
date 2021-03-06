// {{warning}}
System.config({
    baseURL: "{{baseURL}}",
    defaultJSExtensions: true,
    transpiler: "typescript",
    paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },
    bundles: {
        "vendor-build.js": [
          "npm:aurelia-binding@1.2.2.js",
          "npm:aurelia-binding@1.2.2/aurelia-binding.js",
          "npm:aurelia-bootstrapper@2.1.1.js",
          "npm:aurelia-bootstrapper@2.1.1/aurelia-bootstrapper.js",
          "npm:aurelia-dependency-injection@1.3.2.js",
          "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
          "npm:aurelia-event-aggregator@1.0.1.js",
          "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
          "npm:aurelia-framework@1.1.4.js",
          "npm:aurelia-framework@1.1.4/aurelia-framework.js",
          "npm:aurelia-history-browser@1.0.0.js",
          "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
          "npm:aurelia-history@1.0.0.js",
          "npm:aurelia-history@1.0.0/aurelia-history.js",
          "npm:aurelia-loader-default@1.0.2.js",
          "npm:aurelia-loader-default@1.0.2/aurelia-loader-default.js",
          "npm:aurelia-loader@1.0.0.js",
          "npm:aurelia-loader@1.0.0/aurelia-loader.js",
          "npm:aurelia-logging-console@1.0.0.js",
          "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
          "npm:aurelia-logging@1.3.1.js",
          "npm:aurelia-logging@1.3.1/aurelia-logging.js",
          "npm:aurelia-metadata@1.0.3.js",
          "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
          "npm:aurelia-pal-browser@1.3.0.js",
          "npm:aurelia-pal-browser@1.3.0/aurelia-pal-browser.js",
          "npm:aurelia-pal@1.4.0.js",
          "npm:aurelia-pal@1.4.0/aurelia-pal.js",
          "npm:aurelia-path@1.1.1.js",
          "npm:aurelia-path@1.1.1/aurelia-path.js",
          "npm:aurelia-polyfills@1.2.2.js",
          "npm:aurelia-polyfills@1.2.2/aurelia-polyfills.js",
          "npm:aurelia-route-recognizer@1.1.0.js",
          "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
          "npm:aurelia-router@1.3.0.js",
          "npm:aurelia-router@1.3.0/aurelia-router.js",
          "npm:aurelia-task-queue@1.2.0.js",
          "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
          "npm:aurelia-templating-binding@1.3.0.js",
          "npm:aurelia-templating-binding@1.3.0/aurelia-templating-binding.js",
          "npm:aurelia-templating-resources@1.4.0.js",
          "npm:aurelia-templating-resources@1.4.0/abstract-repeater.js",
          "npm:aurelia-templating-resources@1.4.0/analyze-view-factory.js",
          "npm:aurelia-templating-resources@1.4.0/array-repeat-strategy.js",
          "npm:aurelia-templating-resources@1.4.0/attr-binding-behavior.js",
          "npm:aurelia-templating-resources@1.4.0/aurelia-hide-style.js",
          "npm:aurelia-templating-resources@1.4.0/aurelia-templating-resources.js",
          "npm:aurelia-templating-resources@1.4.0/binding-mode-behaviors.js",
          "npm:aurelia-templating-resources@1.4.0/binding-signaler.js",
          "npm:aurelia-templating-resources@1.4.0/compose.js",
          "npm:aurelia-templating-resources@1.4.0/css-resource.js",
          "npm:aurelia-templating-resources@1.4.0/debounce-binding-behavior.js",
          "npm:aurelia-templating-resources@1.4.0/dynamic-element.js",
          "npm:aurelia-templating-resources@1.4.0/focus.js",
          "npm:aurelia-templating-resources@1.4.0/hide.js",
          "npm:aurelia-templating-resources@1.4.0/html-resource-plugin.js",
          "npm:aurelia-templating-resources@1.4.0/html-sanitizer.js",
          "npm:aurelia-templating-resources@1.4.0/if.js",
          "npm:aurelia-templating-resources@1.4.0/map-repeat-strategy.js",
          "npm:aurelia-templating-resources@1.4.0/null-repeat-strategy.js",
          "npm:aurelia-templating-resources@1.4.0/number-repeat-strategy.js",
          "npm:aurelia-templating-resources@1.4.0/repeat-strategy-locator.js",
          "npm:aurelia-templating-resources@1.4.0/repeat-utilities.js",
          "npm:aurelia-templating-resources@1.4.0/repeat.js",
          "npm:aurelia-templating-resources@1.4.0/replaceable.js",
          "npm:aurelia-templating-resources@1.4.0/sanitize-html.js",
          "npm:aurelia-templating-resources@1.4.0/self-binding-behavior.js",
          "npm:aurelia-templating-resources@1.4.0/set-repeat-strategy.js",
          "npm:aurelia-templating-resources@1.4.0/show.js",
          "npm:aurelia-templating-resources@1.4.0/signal-binding-behavior.js",
          "npm:aurelia-templating-resources@1.4.0/throttle-binding-behavior.js",
          "npm:aurelia-templating-resources@1.4.0/update-trigger-binding-behavior.js",
          "npm:aurelia-templating-resources@1.4.0/with.js",
          "npm:aurelia-templating-router@1.1.0.js",
          "npm:aurelia-templating-router@1.1.0/aurelia-templating-router.js",
          "npm:aurelia-templating-router@1.1.0/route-href.js",
          "npm:aurelia-templating-router@1.1.0/route-loader.js",
          "npm:aurelia-templating-router@1.1.0/router-view.js",
          "npm:aurelia-templating@1.4.2.js",
          "npm:aurelia-templating@1.4.2/aurelia-templating.js"
        ]
    },
    map: {
        "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.1.1",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
        "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
        "aurelia-framework": "npm:aurelia-framework@1.1.4",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.3.0",
        "bootstrap": "github:twbs/bootstrap@3.3.7",
        "jquery": "npm:jquery@3.1.1",
        "typescript": "npm:typescript@1.8.10",
        "github:jspm/nodelibs-os@0.1.0": {
            "os-browserify": "npm:os-browserify@0.1.2"
        },
        "github:twbs/bootstrap@3.3.7": {
            "jquery": "npm:jquery@3.1.1"
        },
        "npm:aurelia-binding@1.2.2": {
            "aurelia-logging": "npm:aurelia-logging@1.3.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
            "aurelia-pal": "npm:aurelia-pal@1.4.0",
            "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
        },
        "npm:aurelia-bootstrapper@2.1.1": {
            "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
            "aurelia-framework": "npm:aurelia-framework@1.1.4",
            "aurelia-history": "npm:aurelia-history@1.0.0",
            "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
            "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
            "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
            "aurelia-pal": "npm:aurelia-pal@1.4.0",
            "aurelia-pal-browser": "npm:aurelia-pal-browser@1.3.0",
            "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
            "aurelia-router": "npm:aurelia-router@1.3.0",
            "aurelia-templating": "npm:aurelia-templating@1.4.2",
            "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
            "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
            "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
        },
        "npm:aurelia-dependency-injection@1.3.2": {
            "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
            "aurelia-pal": "npm:aurelia-pal@1.4.0"
        },
        "npm:aurelia-event-aggregator@1.0.1": {
            "aurelia-logging": "npm:aurelia-logging@1.3.1"
        },
        "npm:aurelia-framework@1.1.4": {
            "aurelia-binding": "npm:aurelia-binding@1.2.2",
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
            "aurelia-loader": "npm:aurelia-loader@1.0.0",
            "aurelia-logging": "npm:aurelia-logging@1.3.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
            "aurelia-pal": "npm:aurelia-pal@1.4.0",
            "aurelia-path": "npm:aurelia-path@1.1.1",
            "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
            "aurelia-templating": "npm:aurelia-templating@1.4.2"
        },
        "npm:aurelia-history-browser@1.0.0": {
            "aurelia-history": "npm:aurelia-history@1.0.0",
            "aurelia-pal": "npm:aurelia-pal@1.4.0"
        },
        "npm:aurelia-loader-default@1.0.2": {
            "aurelia-loader": "npm:aurelia-loader@1.0.0",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
            "aurelia-pal": "npm:aurelia-pal@1.4.0"
        },
        "npm:aurelia-loader@1.0.0": {
            "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
            "aurelia-path": "npm:aurelia-path@1.1.1"
        },
        "npm:aurelia-logging-console@1.0.0": {
            "aurelia-logging": "npm:aurelia-logging@1.3.1"
        },
        "npm:aurelia-metadata@1.0.3": {
            "aurelia-pal": "npm:aurelia-pal@1.4.0"
        },
        "npm:aurelia-pal-browser@1.3.0": {
            "aurelia-pal": "npm:aurelia-pal@1.4.0"
        },
        "npm:aurelia-polyfills@1.2.2": {
            "aurelia-pal": "npm:aurelia-pal@1.4.0"
        },
        "npm:aurelia-route-recognizer@1.1.0": {
            "aurelia-path": "npm:aurelia-path@1.1.1"
        },
        "npm:aurelia-router@1.3.0": {
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
            "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
            "aurelia-history": "npm:aurelia-history@1.0.0",
            "aurelia-logging": "npm:aurelia-logging@1.3.1",
            "aurelia-path": "npm:aurelia-path@1.1.1",
            "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
        },
        "npm:aurelia-task-queue@1.2.0": {
            "aurelia-pal": "npm:aurelia-pal@1.4.0"
        },
        "npm:aurelia-templating-binding@1.3.0": {
            "aurelia-binding": "npm:aurelia-binding@1.2.2",
            "aurelia-logging": "npm:aurelia-logging@1.3.1",
            "aurelia-templating": "npm:aurelia-templating@1.4.2"
        },
        "npm:aurelia-templating-resources@1.4.0": {
            "aurelia-binding": "npm:aurelia-binding@1.2.2",
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
            "aurelia-loader": "npm:aurelia-loader@1.0.0",
            "aurelia-logging": "npm:aurelia-logging@1.3.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
            "aurelia-pal": "npm:aurelia-pal@1.4.0",
            "aurelia-path": "npm:aurelia-path@1.1.1",
            "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
            "aurelia-templating": "npm:aurelia-templating@1.4.2"
        },
        "npm:aurelia-templating-router@1.1.0": {
            "aurelia-binding": "npm:aurelia-binding@1.2.2",
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
            "aurelia-logging": "npm:aurelia-logging@1.3.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
            "aurelia-pal": "npm:aurelia-pal@1.4.0",
            "aurelia-path": "npm:aurelia-path@1.1.1",
            "aurelia-router": "npm:aurelia-router@1.3.0",
            "aurelia-templating": "npm:aurelia-templating@1.4.2"
        },
        "npm:aurelia-templating@1.4.2": {
            "aurelia-binding": "npm:aurelia-binding@1.2.2",
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
            "aurelia-loader": "npm:aurelia-loader@1.0.0",
            "aurelia-logging": "npm:aurelia-logging@1.3.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
            "aurelia-pal": "npm:aurelia-pal@1.4.0",
            "aurelia-path": "npm:aurelia-path@1.1.1",
            "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
        },
        "npm:os-browserify@0.1.2": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:typescript@1.8.10": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        }
    }
});
