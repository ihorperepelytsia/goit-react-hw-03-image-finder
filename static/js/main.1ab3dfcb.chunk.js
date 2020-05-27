(this['webpackJsonpgoit-react-hw-02-phonebook'] =
  this['webpackJsonpgoit-react-hw-02-phonebook'] || []).push([
  [0],
  {
    10: function (e, a, t) {
      e.exports = {
        ImageGalleryItem: 'ImageGalleryItem_ImageGalleryItem__3AIjF',
        ImageGalleryItemImage: 'ImageGalleryItem_ImageGalleryItemImage__60XK-',
      };
    },
    11: function (e, a, t) {
      e.exports = {
        Overlay: 'Modal_Overlay__ln64V',
        Modal: 'Modal_Modal__2zgSq',
      };
    },
    26: function (e, a, t) {
      e.exports = { App: 'App_App__3SAy6' };
    },
    31: function (e, a, t) {
      e.exports = { ImagesGallery: 'ImageGallery_ImagesGallery__x-_pI' };
    },
    32: function (e, a, t) {
      e.exports = { btn: 'Button_btn__1fa38' };
    },
    34: function (e, a, t) {
      e.exports = t(60);
    },
    6: function (e, a, t) {
      e.exports = {
        Searchbar: 'Searchbar_Searchbar__3ipNL',
        SearchForm: 'Searchbar_SearchForm__2hUjV',
        SearchFormBtn: 'Searchbar_SearchFormBtn__3HGbh',
        SearchFormBtnLabel: 'Searchbar_SearchFormBtnLabel__3GTXK',
        SearchFormInput: 'Searchbar_SearchFormInput__2SLM1',
      };
    },
    60: function (e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        r = t.n(n),
        o = t(25),
        c = t.n(o),
        l = t(12),
        s = t(2),
        i = t(3),
        m = t(5),
        u = t(4),
        g = t(26),
        h = t(27),
        p = t.n(h),
        d = t(9),
        f = t(7);
      function b() {
        var e = Object(d.a)(['\n  display: block;\n  margin: 0 auto;\n']);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = Object(d.a)(['\n  display: block;\n  margin: 100px auto;\n']);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      var v = Object(f.css)(y()),
        I = Object(f.css)(b()),
        S = t(29),
        _ = t.n(S),
        O = '&key=15725312-965e6abfe89225a1afd144b44',
        E = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '',
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
          return _.a.get(
            ''
              .concat('https://pixabay.com/api/', '?q=')
              .concat(e, '&page=')
              .concat(a)
              .concat(
                O,
                '&image_type=photo&orientation=horizontal&per_page=12',
              ),
          );
        },
        L = t(8),
        k =
          (t(23),
          t(24),
          function (e) {
            0 === e.length &&
              Object(L.error)({
                text: 'No results were found for your request.',
              });
          }),
        j = t(30),
        M = t(6),
        w = (function (e) {
          Object(m.a)(t, e);
          var a = Object(u.a)(t);
          function t() {
            var e;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(r))).state = { query: '' }),
              (e.handleChange = function (a) {
                var t = a.target,
                  n = t.name,
                  r = t.value;
                e.setState(Object(j.a)({}, n, r));
              }),
              (e.handleSubmit = function (a) {
                a.preventDefault(),
                  e.state.query.length <= 1
                    ? Object(L.error)({ text: 'Enter more information' })
                    : (e.props.onSubmit(e.state.query),
                      e.setState({ query: '' }));
              }),
              e
            );
          }
          return (
            Object(i.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.query;
                  return r.a.createElement(
                    'header',
                    { className: M.Searchbar },
                    r.a.createElement(
                      'form',
                      { className: M.SearchForm, onSubmit: this.handleSubmit },
                      r.a.createElement(
                        'button',
                        { type: 'submit', className: M.SearchFormBtn },
                        r.a.createElement(
                          'span',
                          { className: M.SearchFormBtnLabel },
                          'Search',
                        ),
                      ),
                      r.a.createElement('input', {
                        className: M.SearchFormInput,
                        type: 'text',
                        autoComplete: 'off',
                        autoFocus: !0,
                        name: 'query',
                        value: e,
                        onChange: this.handleChange,
                        placeholder: 'Search images and photos',
                      }),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        F = t(10),
        C = function (e) {
          var a = e.largeImageURL,
            t = e.webformatURL,
            n = e.tags,
            o = e.onOpenModal;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'li',
              { className: F.ImageGaleryItem },
              r.a.createElement('img', {
                src: t,
                alt: n,
                className: F.ImageGalleryItemImage,
                onClick: o,
                'data-source': a,
              }),
            ),
          );
        },
        R = t(31),
        x = function (e) {
          var a = e.images,
            t = e.onOpenModal;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'ul',
              { className: R.ImagesGallery },
              a.map(function (e) {
                return r.a.createElement(
                  C,
                  Object.assign({ key: e.id }, e, { onOpenModal: t }),
                );
              }),
            ),
          );
        },
        G = t(11),
        N = (function (e) {
          Object(m.a)(t, e);
          var a = Object(u.a)(t);
          function t() {
            var e;
            Object(s.a)(this, t);
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++)
              o[c] = arguments[c];
            return (
              ((e = a.call.apply(a, [this].concat(o))).backdropRef = Object(
                n.createRef,
              )()),
              (e.handleKeyPress = function (a) {
                'Escape' === a.code && e.props.onCloseModal();
              }),
              (e.handleBackdropClick = function (a) {
                var t = e.backdropRef.current;
                (t && a.target !== t) || e.props.onCloseModal();
              }),
              e
            );
          }
          return (
            Object(i.a)(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  window.addEventListener('keydown', this.handleKeyPress);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('keydown', this.handleKeyPress);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.largeImageURL,
                    t = e.tags;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      'div',
                      {
                        className: G.Overlay,
                        ref: this.backdropRef,
                        onClick: this.handleBackdropClick,
                      },
                      r.a.createElement(
                        'div',
                        { className: G.Modall },
                        r.a.createElement('img', { src: a, alt: t }),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        U = function (e) {
          return e.map(function (e) {
            return {
              id: e.id,
              webformatURL: e.webformatURL,
              largeImageURL: e.largeImageURL,
              tags: e.tags,
            };
          });
        },
        q = t(32),
        A = t(33),
        B = t.n(A),
        K = function (e) {
          var a = e.onClick,
            t = e.isLoading;
          return r.a.createElement(
            'div',
            null,
            t
              ? r.a.createElement(B.a, {
                  css: I,
                  height: '6px',
                  width: '180px',
                  color: '#3f51b5',
                })
              : r.a.createElement(
                  'button',
                  { className: q.btn, type: 'submit', onClick: a },
                  'Load more...',
                ),
          );
        },
        P = function () {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        },
        z = (function (e) {
          Object(m.a)(t, e);
          var a = Object(u.a)(t);
          function t() {
            var e;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(r))).state = {
                images: [],
                page: 1,
                largeImageURL: '',
                tags: '',
                isLoading: !1,
                isModalOpen: !1,
                error: null,
              }),
              (e.fetchImagesAPI = function (a) {
                e.setState({ isLoading: !0 }),
                  E(a)
                    .then(function (t) {
                      var n = t.data;
                      e.setState({ images: U(n.hits), query: a }), k(n.hits);
                    })
                    .catch(function (a) {
                      return e.setState({ error: a });
                    })
                    .finally(function () {
                      return e.setState({ isLoading: !1 });
                    });
              }),
              (e.handleLoadMore = function (a) {
                e.setState({ isLoading: !0 }),
                  E(e.state.query, e.state.page + 1)
                    .then(function (a) {
                      var t = a.data;
                      e.setState(function (e) {
                        return {
                          images: [].concat(
                            Object(l.a)(e.images),
                            Object(l.a)(U(t.hits)),
                          ),
                          page: e.page + 1,
                        };
                      });
                    })
                    .catch(function (a) {
                      return e.setState({ error: a });
                    })
                    .finally(function () {
                      P(), e.setState({ isLoading: !1 });
                    });
              }),
              (e.openModal = function (a) {
                var t = a.target,
                  n = t.alt,
                  r = t.dataset;
                e.setState({
                  isModalOpen: !0,
                  largeImageURL: r.source,
                  tags: n,
                });
              }),
              (e.closeModal = function () {
                return e.setState({ isModalOpen: !1, largeImageURL: '' });
              }),
              e
            );
          }
          return (
            Object(i.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    a = e.images,
                    t = e.isLoading,
                    n = e.isModalOpen,
                    o = e.largeImageURL,
                    c = e.tags;
                  return r.a.createElement(
                    'div',
                    { className: g.App },
                    r.a.createElement(w, { onSubmit: this.fetchImagesAPI }),
                    t &&
                      r.a.createElement(p.a, {
                        css: v,
                        size: 100,
                        color: '#000',
                      }),
                    !!a.length &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(x, {
                          images: a,
                          onOpenModal: this.openModal,
                        }),
                        r.a.createElement(K, {
                          onClick: this.handleLoadMore,
                          isLoading: t,
                        }),
                      ),
                    n &&
                      r.a.createElement(N, {
                        largeImageURL: o,
                        tags: c,
                        onCloseModal: this.closeModal,
                      }),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      c.a.render(r.a.createElement(z, null), document.getElementById('root'));
    },
  },
  [[34, 1, 2]],
]);
//# sourceMappingURL=main.1ab3dfcb.chunk.js.map
