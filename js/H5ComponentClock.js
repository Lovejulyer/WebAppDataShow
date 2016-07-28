/* 时钟组件对象 */

var H5ComponentClock =function ( name, cfg ) {
  var component =  new H5ComponentBase( name ,cfg );
  
  
  var frame = $('<div class="frame">');
  component.addClass('h5_component_clock');
  component.append(frame);
  
  var h_line = $('<div class="h-line">');
  var s_line = $('<div class="s-line">');
  var m_line = $('<div class="m-line">');
  frame.append( h_line ).append( s_line ).append( m_line );
  
  // 可添加文字等--拓展

  return component; 
}











